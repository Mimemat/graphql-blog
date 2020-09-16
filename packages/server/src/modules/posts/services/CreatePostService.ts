import { inject, injectable } from 'tsyringe';

import { IService } from '@shared/core/Service';

import { Post } from '../infra/typeorm/entities/Post';
import {
  ICreatePostArgs,
  IPostsRepository,
} from '../repositories/IPostsRepository';

@injectable()
export class CreatePostService implements IService<ICreatePostArgs, Post> {
  constructor(
    @inject('PostsRepository') private postsRepository: IPostsRepository
  ) {}

  async execute(info: ICreatePostArgs): Promise<Post> {
    const newPost = await this.postsRepository.create(info);

    return newPost;
  }
}
