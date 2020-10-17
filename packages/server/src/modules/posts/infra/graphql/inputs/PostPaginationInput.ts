import { Field, InputType, ObjectType } from 'type-graphql';

import { Post } from '../../typeorm/entities/Post';

@InputType()
export class PostPaginationInput {
  @Field()
  max: number;

  @Field()
  page: number;
}

@ObjectType()
export class PostPaginationResponst {
  @Field(() => [Post])
  data: Post[];

  @Field()
  total: number;
}
