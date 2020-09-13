import { Field, InputType } from 'type-graphql';

@InputType()
export class UserCreationInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
