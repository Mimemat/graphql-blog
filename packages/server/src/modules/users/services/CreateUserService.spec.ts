import faker from 'faker';

import { FakeHashProvider } from '@shared/containers/providers/fakes/FakeHashProvider';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { IUserCreateArgs } from '../repositories/IUsersRepository';
import { CreateUserService } from './CreateUserService';

describe('Create User', () => {
  it('Should be able to create new users', async () => {
    const userData: IUserCreateArgs = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      password: faker.random.word(),
    };

    const createUserService = new CreateUserService(
      new FakeUsersRepository(),
      new FakeHashProvider()
    );

    const newUser = await createUserService.execute(userData);

    const { password: _, ...userInfo } = userData;

    expect(newUser).toEqual(expect.objectContaining(userInfo));
  });
});
