import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import { IPost } from '../../components/Post';

import { Container, Content, Title } from '../../styles/pages/posts/[postId]';

interface IFullPost extends IPost {
  content: string;
}

const post: IFullPost = {
  id: '3',
  thumbnail: 'https://i.ytimg.com/vi/T571423fC68/maxresdefault.jpg',
  title: 'Fazendo uma API com graphql',
  content: '# Fazendo uma API com graphql \n Para fazer essa api',
};

const Post: React.FC = () => {
  const isScreenBigger = useMediaQuery({ minDeviceWidth: 700 });

  return (
    <Container>
      <Header />

      <Content>
        <Title backgroundImage={post.thumbnail}>
          {isScreenBigger && <img src={post.thumbnail} alt={post.title} />}
          <h1>{post.title}</h1>
        </Title>

        <ReactMarkdown source={post.content} />
      </Content>
    </Container>
  );
};

export default Post;
