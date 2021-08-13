import { Grid } from "@chakra-ui/react";
import React from "react";
import { UserProvider } from "../context/UserContext";
import { Chat } from "../components/chat";
import { Form } from "../components/form";

export const Home: React.FC = () => {
  return (
    <UserProvider>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={8}>
        <Form />
        <Chat />
      </Grid>
    </UserProvider>
  );
};
