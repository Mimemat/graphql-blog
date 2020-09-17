import { Field, InputType } from 'type-graphql';

@InputType()
export class UserAuthenticationInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
