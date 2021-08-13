import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { WebSocketLink } from "@apollo/client/link/ws";

import { Home } from "./pages/Home";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "http://localhost:4010",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:4010",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return <Home />;
}

export const ApolloApp = () => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>
);

export default ApolloApp;
