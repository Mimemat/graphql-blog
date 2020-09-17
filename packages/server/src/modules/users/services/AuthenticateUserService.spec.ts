import faker from 'faker';

import { FakeHashProvider } from '@shared/containers/providers/fakes/FakeHashProvider';
import { IHashProvider } from '@shared/containers/providers/models/IHashProvider';
import { ServiceError } from '@shared/errors/ServiceError';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import {
  IUserCreateArgs,
  IUsersRepository,
} from '../repositories/IUsersRepository';
import { AuthenticateUserService } from './AuthenticateUserService';

let hashProvider: IHashProvider;
let usersRepository: IUsersRepository;
let authenticateUserService: AuthenticateUserService;

describe('Authenticate user', () => {
  beforeEach(() => {
    hashProvider = new FakeHashProvider();
    usersRepository = new FakeUsersRepository();
    authenticateUserService = new AuthenticateUserService(
      usersRepository,
      hashProvider
    );
  });

  it('Should be able to authenticate user', async (next) => {
    const userData: IUserCreateArgs = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.random.word(),
    };

    await usersRepository.create(userData);

    const response = await authenticateUserService.execute({
      email: userData.email,
      password: userData.password,
    });

    expect(response).toBeTruthy();

    next();
  });

  it('Should not be able to authenticate wrong users', async (next) => {
    try {
      await authenticateUserService.execute({
        email: 'non-existing-email',
        password: '',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(ServiceError);
    }

    next();
  });

  it('Should not be able to authenticate with wrong password', async (next) => {
    const userData: IUserCreateArgs = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.random.word(),
    };

    await usersRepository.create(userData);

    try {
      await authenticateUserService.execute({
        email: userData.email,
        password: 'wrong password',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(ServiceError);
    }

    next();
  });
});
