import faker from 'faker';

import { FakePostsRepository } from '../repositories/fakes/FakePostsRepository';
import { CreatePostService } from './CreatePostService';

describe('Create Post', () => {
  it('Should be able to create new Post', async (next) => {
    const postInfo = {
      title: faker.random.words(2),
      content: faker.random.words(10),
    };

    const post = await new CreatePostService(new FakePostsRepository()).execute(
      {
        ...postInfo,
        creator_id: 'user_id',
      }
    );

    expect(post).toEqual(expect.objectContaining(postInfo));

    next();
  });
});
