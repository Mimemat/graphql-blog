import { inject, injectable } from 'tsyringe';

import { IService } from '@shared/core/Service';
import { ServiceError } from '@shared/errors/ServiceError';

import { Post } from '../infra/typeorm/entities/Post';
import { IPostsRepository } from '../repositories/IPostsRepository';

@injectable()
export class FindPostService implements IService<string, Post> {
  constructor(
    @inject('PostsRepository') private postsRepository: IPostsRepository
  ) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new ServiceError('Post not found', 404);
    }

    return post;
  }
}
