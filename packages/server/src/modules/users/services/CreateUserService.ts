import { inject, injectable } from 'tsyringe';

import { IHashProvider } from '@shared/containers/providers/models/IHashProvider';
import { IService } from '@shared/core/Service';
import { ServiceError } from '@shared/errors/ServiceError';

import { User } from '../infra/typeorm/entities/User';
import {
  IUserCreateArgs,
  IUsersRepository,
} from '../repositories/IUsersRepository';

@injectable()
export class CreateUserService implements IService<IUserCreateArgs, User> {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider
  ) {}

  async execute({ email, name, password }: IUserCreateArgs): Promise<User> {
    const doesUserExist = await this.usersRepository.findByEmail(email);

    if (doesUserExist) {
      throw new ServiceError('User already exists', 400);
    }

    const newUser = await this.usersRepository.create({
      email,
      name,
      password: await this.hashProvider.generate(password),
    });

    return newUser;
  }
}
