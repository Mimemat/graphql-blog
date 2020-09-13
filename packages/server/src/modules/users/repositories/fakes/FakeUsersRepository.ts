import { v4 as uuid } from 'uuid';

import { User } from '@modules/users/infra/typeorm/entities/User';

import { IUserCreateArgs, IUsersRepository } from '../IUsersRepository';

export class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  public async create(userData: IUserCreateArgs): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }
}
