import { gql } from 'graphql-request';

export const getPosts = gql`
  query {
    findPaginatedPosts(data: { max: 5, page: 0 }) {
      data {
        id
        title
      }
    }
  }
`;

export const getFullPosts = gql`
  query {
    findPaginatedPosts(data: { max: 5, page: 0 }) {
      data {
        id
        title
        content
      }
    }
  }
`;
