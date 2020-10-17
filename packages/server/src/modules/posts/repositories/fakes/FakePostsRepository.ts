import { compareAsc } from 'date-fns';
import { v4 as uuid } from 'uuid';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';

import {
  ICreatePostArgs,
  IPaginatedArgs,
  IPaginatedResponse,
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

  public async createMany(info: ICreatePostArgs[]): Promise<Post[]> {
    const posts = info.map((data) => {
      const createdPost = new Post();
      Object.assign(createdPost, { id: uuid(), ...data });

      return createdPost;
    });

    this.posts = [...this.posts, ...posts];

    return posts;
  }

  public async findPaginated({
    max,
    skip,
  }: IPaginatedArgs): Promise<IPaginatedResponse> {
    return {
      data: this.posts
        .sort((a, b) => compareAsc(a.created_at, b.created_at))
        .slice(skip, max * (skip + 1)),
      total: this.posts.length,
    };
  }

  public async findById(id: string): Promise<Post> {
    return this.posts.find((post) => post.id === id);
  }

  public async findManyByIds(ids: string[]): Promise<Post[]> {
    return this.posts.filter((post) => ids.includes(post.id));
  }
}
