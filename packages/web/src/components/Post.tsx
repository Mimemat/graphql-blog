import React from 'react';

import { Container, PostSkeleton } from '../styles/components/Post';

export interface IPost {
  id: string;
  title: string;
  thumbnail: string;
}

const Post: React.FC<{ post?: IPost }> = ({ post }) => {
  return post ? (
    <Container href={`/posts/${post.id}`} backgroundImage={post.thumbnail}>
      <h2>{post.title}</h2>
    </Container>
  ) : (
    <PostSkeleton />
  );
};

export default Post;
