import { ObjectType, Field } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';

@ObjectType()
@Entity('users')
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.creator, {
    cascade: true,
  })
  posts: Post[];

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date;
}
