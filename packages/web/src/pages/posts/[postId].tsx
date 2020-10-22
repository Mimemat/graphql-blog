import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import { IPost } from '../../components/Post';
import PostLoading from '../../components/PostLoading';
import { client } from '../../services/client';
import { getPost, getPosts } from '../../services/queries/posts';

import { Container, Content, Title } from '../../styles/pages/posts/[postId]';

interface IFullPost extends IPost {
  content: string;
}

const Post: React.FC<{ post: IFullPost }> = ({ post }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Container>
        <Header />
        <Content>
          <PostLoading />
        </Content>
      </Container>
    );
  }

  return post ? (
    <Container>
      <Header />
      <Content>
        <Title backgroundImage="https://graphql.org/img/og_image.png">
          <img src="https://graphql.org/img/og_image.png" alt={post.title} />
          <h1>{post.title}</h1>
        </Title>
        <ReactMarkdown source={post.content} />
      </Content>
    </Container>
  ) : (
    <Error statusCode={404} title="Post not found" />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    findPaginatedPosts: { data },
  } = await client.request<{
    findPaginatedPosts: {
      data: IFullPost[];
    };
  }>(getPosts);

  const paths = data.map((post) => {
    return {
      params: {
        postId: post.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ post: IFullPost }> = async (
  ctx
) => {
  const { postId } = ctx.params;

  const response = await client
    .request<{
      findPost: IFullPost;
    }>(getPost, {
      id: postId,
    })
    .catch(() => {
      return { findPost: null };
    });

  return {
    props: {
      post: response.findPost,
    },
  };
};

export default Post;
