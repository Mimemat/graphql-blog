import { ApolloError } from 'apollo-server-express';
import { container } from 'tsyringe';
import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql';

import { ServiceError } from '@shared/errors/ServiceError';

import { AuthenticateUserService } from '@modules/users/services/AuthenticateUserService';
import { CreateUserService } from '@modules/users/services/CreateUserService';

import { User } from '../../typeorm/entities/User';
import { UserAuthenticationInput } from '../inputs/UserAuthenticationInput';
import { UserCreationInput } from '../inputs/UserCreationInput';

@ObjectType()
class UserLoginResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async register(@Arg('data') data: UserCreationInput): Promise<User> {
    const createUserService = container.resolve(CreateUserService);

    const response = await createUserService.execute(data);

    return response;
  }

  @Mutation(() => UserLoginResponse)
  async login(
    @Arg('data') data: UserAuthenticationInput
  ): Promise<UserLoginResponse> {
    const authenticateUserService = container.resolve(AuthenticateUserService);

    try {
      const response = await authenticateUserService.execute(data);

      return response;
    } catch (err) {
      if (err instanceof ServiceError) {
        throw new ApolloError(err.message, String(err.code));
      }
      console.error(err);
    }
  }
}
