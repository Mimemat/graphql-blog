import React from 'react';

import Header from '../components/Header';
import Post, { IPost } from '../components/Post';
import { useQuery } from '../hooks/swr/useQuery';
import { getPosts } from '../services/queries/posts';

import {
  Container,
  Content,
  MainTitle,
  SubTitle,
  PostsText,
  PostsContainer,
} from '../styles/pages/Landing';

const Home: React.FC = () => {
  const [posts, error] = useQuery<{
    findPaginatedPosts: {
      data: IPost[];
    };
  }>(getPosts);

  if (error) {
    alert('It seems that something has gone wrong');
    console.error(error);
  }

  return (
    <Container>
      <Header />

      <Content>
        <MainTitle>Graphql-blog</MainTitle>
        <SubTitle>
          A minimalistic blog that uses the power of Graphql to be blazing fast
        </SubTitle>

        <PostsText>Posts recentes</PostsText>
        <PostsContainer>
          {posts
            ? posts.findPaginatedPosts.data.map((post) => (
                <Post
                  key={post.id}
                  post={{
                    ...post,
                    thumbnail: 'https://graphql.org/img/og_image.png',
                  }}
                />
              ))
            : Array.from(Array(20)).map((_, index) => <Post key={index} />)}
        </PostsContainer>
      </Content>
    </Container>
  );
};

export default Home;
