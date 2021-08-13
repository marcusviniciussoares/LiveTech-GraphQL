import { useMutation } from "@apollo/client";
import { Button, Input, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useUser } from "../context/UserContext";
import { ADD_USER } from "../graphQL/user";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { user, setUser } = useUser();
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const handleAddUser = useCallback(async () => {
    console.log("submiting");

    const newUser = await addUser({ variables: { name, email } });
    setUser(newUser.data.createUser);
  }, [addUser, email, name, setUser]);

  if (error) return <div>`Submission error! ${error.message}`</div>;

  return (
    <div>
      <Text mb={4} textTransform="uppercase">
        Digite seus dados:
      </Text>
      <Input placeholder="Seu ID" mb={4} readOnly disabled value={user.id} />
      <Input
        placeholder="Digite seu nome"
        mb={4}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Digite seu email"
        mb={4}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        w="100%"
        colorScheme="blue"
        isLoading={loading}
        onClick={handleAddUser}
      >
        Entrar
      </Button>
    </div>
  );
};
