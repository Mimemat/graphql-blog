import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Post, { IPost } from '../components/Post';
import { client } from '../services/client';
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
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    client
      .request<{
        findPaginatedPosts: {
          data: IPost[];
        };
      }>(getPosts)
      .then((response) => {
        setPosts(response.findPaginatedPosts.data);
      });
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
        <PostsContainer>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={{
                ...post,
                thumbnail: 'https://graphql.org/img/og_image.png',
              }}
            />
          ))}
        </PostsContainer>
      </Content>
    </Container>
  );
};

export default Home;
