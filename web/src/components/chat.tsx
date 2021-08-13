/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { Flex, Input } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import {
  MESSAGES,
  MESSAGE_SUBSCRIPTION,
  NEW_MESSAGE,
} from "../graphQL/message";

export interface Message {
  id: string;
  user: {
    name: string;
  };
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface ISubscribeType {
  newMessage: Message;
}

interface IQueryType {
  messages: Message[];
}

export const Chat: React.FC = () => {
  const { user } = useUser();
  const [message, setMessage] = useState<string>("");
  const { loading, error, data: gqlMessages } = useQuery<IQueryType>(MESSAGES);
  const [addMessage, { error: errorNewMessage }] = useMutation(NEW_MESSAGE);
  const { data: gqlNewMessage } = useSubscription<ISubscribeType>(
    MESSAGE_SUBSCRIPTION,
    {}
  );

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    !!gqlMessages && setMessages(gqlMessages.messages);
  }, [gqlMessages]);

  useEffect(() => {
    if (gqlNewMessage) {
      const { newMessage } = gqlNewMessage;
      setMessages((x) => [newMessage, ...x]);
    }
  }, [gqlNewMessage]);

  const onSubmit = useCallback(() => {
    if (user.id) {
      console.log("enviando...");
      addMessage({ variables: { user: user.id, message } });
      setMessage("");
    }
  }, [addMessage, message, user.id]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Flex flexDir="column">
      <Flex flexDir="column" bg="gray.100" p={4} overflowY="auto" h="400px">
        {messages.map((message: Message) => (
          <Flex key={message.id} flexDir="column" mb={1}>
            <Flex>{message.user.name}, diz: </Flex>
            <Flex fontSize="smaller" fontWeight="bold">
              {message.message}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Input
        name="send"
        mt={2}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </Flex>
  );
};
