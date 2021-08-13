import { gql } from "@apollo/client";

export const MESSAGES = gql`
  query GetMessages {
    messages {
      id
      user {
        id
        name
        email
      }
      message
      createdAt
    }
  }
`;

export const NEW_MESSAGE = gql`
  mutation AddMessage($user: ID!, $message: String!) {
    createMessage(data: { user: $user, message: $message }) {
      user {
        name
      }
      message
      createdAt
    }
  }
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription OnNewMessage {
    newMessage {
      id
      user {
        name
      }
      message
    }
  }
`;
