import { Post } from '../infra/typeorm/entities/Post';

export type ICreatePostArgs = Omit<Post, 'id' | 'created_at' | 'creator'>;

export interface IPaginatedArgs {
  max: number;
  skip: number;
}

export interface IPaginatedResponse {
  data: Post[];
  total: number;
}

export interface IPostsRepository {
  create(info: ICreatePostArgs): Promise<Post>;
  findPaginated(info: IPaginatedArgs): Promise<IPaginatedResponse>;
  findById(id: string): Promise<Post>;
}
