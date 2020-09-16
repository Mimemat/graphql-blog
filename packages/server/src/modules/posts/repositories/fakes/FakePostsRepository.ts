import { v4 as uuid } from 'uuid';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';

import {
  ICreatePostArgs,
  IPaginatedArgs,
  IPostsRepository,
} from '../IPostsRepository';

export class FakePostsRepository implements IPostsRepository {
  private posts: Post[] = [];

  public async create(info: ICreatePostArgs): Promise<Post> {
    const newPost = new Post();

    Object.assign(newPost, { id: uuid(), ...info });

    this.posts.push(newPost);

    return newPost;
  }

  public async findPaginated({ max, page }: IPaginatedArgs): Promise<Post[]> {
    const startingPoint = max * page;
    const endingPoint = max * (page + 1);

    return this.posts.slice(startingPoint, endingPoint);
  }

  public async findById(id: string): Promise<Post> {
    return this.posts.find((post) => post.id === id);
  }
}
