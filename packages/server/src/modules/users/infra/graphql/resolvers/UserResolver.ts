import { container } from 'tsyringe';
import { Arg, Mutation, Resolver } from 'type-graphql';

import { CreateUserService } from '@modules/users/services/CreateUserService';

import { User } from '../../typeorm/entities/User';
import { UserCreationInput } from '../inputs/UserCreationInput';

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async register(@Arg('info') info: UserCreationInput): Promise<User> {
    const createUserService = container.resolve(CreateUserService);

    const response = await createUserService.execute(info);

    return response;
  }
}
