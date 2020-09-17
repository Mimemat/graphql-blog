import { container } from 'tsyringe';

import { PostsRepository } from '@modules/posts/infra/typeorm/repositories/PostsRepositories';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import './providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository
);
