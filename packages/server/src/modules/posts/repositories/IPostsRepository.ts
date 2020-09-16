import { Post } from '../infra/typeorm/entities/Post';

export type ICreatePostArgs = Omit<Post, 'id' | 'created_at' | 'creator'>;

export interface IPaginatedArgs {
  max: number;
  page: number;
}

export interface IPostsRepository {
  create(info: ICreatePostArgs): Promise<Post>;
  findPaginated(info: IPaginatedArgs): Promise<Post[]>;
  findById(id: string): Promise<Post>;
}
