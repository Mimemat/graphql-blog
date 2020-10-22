import { gql } from 'graphql-request';

export const loginUser = gql`
  mutation login($password: String!, $email: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        name
        id
      }
    }
  }
`;
