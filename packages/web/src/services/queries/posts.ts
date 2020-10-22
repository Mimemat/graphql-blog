import { gql } from 'graphql-request';

export const getPosts = gql`
  query {
    findPaginatedPosts(data: { max: 10, page: 0 }) {
      data {
        id
        title
      }
    }
  }
`;

export const getFullPosts = gql`
  query {
    findPaginatedPosts(data: { max: 20, page: 0 }) {
      data {
        id
        title
        content
      }
    }
  }
`;

export const getPost = gql`
  query findPost($id: String!) {
    findPost(id: $id) {
      title
      content
    }
  }
`;
