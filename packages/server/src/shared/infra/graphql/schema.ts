import { GraphQLSchema } from 'graphql';
import { buildSchema, Query, Resolver } from 'type-graphql';

import { UserResolver } from '@modules/users/infra/graphql/resolvers/UserResolver';

@Resolver()
class HelloWorldResolver {
  @Query(() => String)
  hello() {
    return 'Hello World';
  }
}

export const getSchema = (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [HelloWorldResolver, UserResolver],
    validate: false,
  });
};
