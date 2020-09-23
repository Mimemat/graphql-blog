import React from 'react';

import { Container } from '../styles/components/Post';

export interface IPost {
  id: string;
  title: string;
  thumbnail: string;
}

const Post: React.FC<{ post: IPost }> = ({
  post: { title, thumbnail, id },
}) => {
  return (
    <Container href={`/posts/${id}`} backgroundImage={thumbnail}>
      <h2>{title}</h2>
    </Container>
  );
};

export default Post;
