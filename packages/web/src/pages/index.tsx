import React from 'react';

import Header from '../components/Header';
import Post from '../components/Post';

import {
  Container,
  Content,
  MainTitle,
  SubTitle,
  PostsText,
  PostsContainer,
} from '../styles/pages/Landing';

const Home: React.FC = () => {
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
