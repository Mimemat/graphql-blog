import { getRepository, Repository } from 'typeorm';

import {
  ICreatePostArgs,
  IPaginatedArgs,
  IPaginatedResponse,
  IPostsRepository,
} from '@modules/posts/repositories/IPostsRepository';

import { Post } from '../entities/Post';

export class PostsRepository implements IPostsRepository {
  private orm: Repository<Post>;

  constructor() {
    this.orm = getRepository(Post);
  }

  async create(info: ICreatePostArgs): Promise<Post> {
    const post = this.orm.create(info);

    await this.orm.save(post);

    return post;
  }

  async findById(id: string): Promise<Post> {
    return this.orm.findOne({
      where: { id },
    });
  }

  async findPaginated({
    max,
    skip,
  }: IPaginatedArgs): Promise<IPaginatedResponse> {
    const [data, total] = await this.orm.findAndCount({
      take: max,
      skip,
    });

    return { data, total };
  }
}
