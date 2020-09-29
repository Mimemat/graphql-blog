import React, { useEffect } from 'react';

import { gql } from '@apollo/client';

import Header from '../components/Header';
import Post from '../components/Post';
import { client } from '../services/api';

import {
  Container,
  Content,
  MainTitle,
  SubTitle,
  PostsText,
  PostsContainer,
} from '../styles/pages/Landing';

const Home: React.FC = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            hello
          }
        `,
      })
      .then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <MainTitle>Graphql-blog</MainTitle>
        <SubTitle>
          A minimalistic blog that uses the power of Graphql to be blazing fast
        </SubTitle>

        <PostsText>Posts recentes</PostsText>
      </Content>
      <PostsContainer>
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
        <Post
          post={{
            id: '3',
            thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
            title: 'Fazendo uma API com graphql',
          }}
        />
      </PostsContainer>
    </Container>
  );
};

export default Home;
