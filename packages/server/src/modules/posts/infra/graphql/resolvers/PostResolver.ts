import { AuthenticationError } from 'apollo-server-express';
import { container } from 'tsyringe';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { IContext } from '@shared/infra/graphql/context/auth';

import { CreatePostService } from '@modules/posts/services/CreatePostService';

import { Post } from '../../typeorm/entities/Post';
import { PostCreationInput } from '../inputs/PostCreationInput';

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
}
