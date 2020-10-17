import faker from 'faker';

import { FakePostsRepository } from '../repositories/fakes/FakePostsRepository';
import { FindPaginatedPostsService } from './FindPaginatedPostsService';

describe('Find paginated Posts', () => {
  it('Should be able to paginte and find posts', async (next) => {
    const fakePostsRepository = new FakePostsRepository();

    await fakePostsRepository.createMany(
      Array(10).map(() => {
        return {
          title: faker.random.words(2),
          content: faker.random.words(10),
          creator_id: 'user_id',
        };
      })
    );

    const result = await new FindPaginatedPostsService(
      fakePostsRepository
    ).execute({
      max: 5,
      page: 0,
    });

    expect(result.data.length).toBe(5);

    next();
  });
});
