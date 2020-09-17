import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IHashProvider } from '@shared/containers/providers/models/IHashProvider';
import { IService } from '@shared/core/Service';
import { ServiceError } from '@shared/errors/ServiceError';

import { authConfig } from '@config/auth';

import {
  IAuthenticateResponse,
  IAuthenticateUserDTO,
} from '../dtos/IAuthenticateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
export class AuthenticateUserService
  implements IService<IAuthenticateUserDTO, IAuthenticateResponse> {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProvider: IHashProvider
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateUserDTO): Promise<IAuthenticateResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ServiceError('User not found', 404);
    }

    const doesPasswordMatch = await this.hashProvider.compare(
      password,
      user.password
    );

    if (!doesPasswordMatch) {
      throw new ServiceError('Incorrect password', 401);
    }

    const { expiresIn, secret } = authConfig;

    const token = sign({ id: user.id }, secret, {
      expiresIn,
    });

    return { token, user };
  }
}
