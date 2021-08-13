import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    createUser(data: { name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;
