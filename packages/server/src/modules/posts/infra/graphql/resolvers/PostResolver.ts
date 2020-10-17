import { AuthenticationError } from 'apollo-server-express';
import { container } from 'tsyringe';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import { IContext } from '@shared/infra/graphql/context/auth';

import { CreatePostService } from '@modules/posts/services/CreatePostService';
import { FindPaginatedPostsService } from '@modules/posts/services/FindPaginatedPostsService';

import { Post } from '../../typeorm/entities/Post';
import { PostCreationInput } from '../inputs/PostCreationInput';
import {
  PostPaginationInput,
  PostPaginationResponst,
} from '../inputs/PostPaginationInput';

@Resolver(Post)
export class PostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg('data') data: PostCreationInput,
    @Ctx() ctx: IContext
  ): Promise<Post> {
    if (!ctx.userId) {
      throw new AuthenticationError('You must be logged in to create a post');
    }

    const postCreationService = container.resolve(CreatePostService);

    const newPost = await postCreationService.execute({
      ...data,
      creator_id: ctx.userId,
    });

    return newPost;
  }

  @Query(() => PostPaginationResponst)
  async findPaginatedPosts(
    @Arg('data') data: PostPaginationInput
  ): Promise<PostPaginationResponst> {
    const findPaginatedPostsService = container.resolve(
      FindPaginatedPostsService
    );

    const info = await findPaginatedPostsService.execute(data);

    return info;
  }
}
