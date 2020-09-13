import { User } from '../infra/typeorm/entities/User';

export interface IUserCreateArgs {
  email: string;
  password: string;
  name: string;
}

export interface IUsersRepository {
  create(args: IUserCreateArgs): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
