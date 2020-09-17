import { Field, InputType } from 'type-graphql';

@InputType()
export class PostCreationInput {
  @Field()
  title: string;

  @Field()
  content: string;
}
