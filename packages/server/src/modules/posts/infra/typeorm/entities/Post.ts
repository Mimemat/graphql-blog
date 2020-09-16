import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '@modules/users/infra/typeorm/entities/User';

@ObjectType()
@Entity('posts')
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Column()
  creator_id: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date;
}
