import { getRepository, Repository } from 'typeorm';

import {
  IUserCreateArgs,
  IUsersRepository,
} from '@modules/users/repositories/IUsersRepository';

import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private orm: Repository<User>;

  constructor() {
    this.orm = getRepository(User);
  }

  public findByEmail(email: string): Promise<User> {
    return this.orm.findOne({
      where: { email },
    });
  }

  public findById(id: string): Promise<User> {
    return this.orm.findOne(id);
  }

  public async create(info: IUserCreateArgs): Promise<User> {
    const user = this.orm.create(info);

    await this.orm.save(user);

    return user;
  }
}
