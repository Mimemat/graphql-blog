import faker from 'faker';

import { ServiceError } from '@shared/errors/ServiceError';

import { FakePostsRepository } from '../repositories/fakes/FakePostsRepository';
import { IPostsRepository } from '../repositories/IPostsRepository';
import { FindPostService } from './FindPostService';

let findPostService: FindPostService;
let fakePostsRepository: IPostsRepository;

describe('Find post', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    findPostService = new FindPostService(fakePostsRepository);
  });

  it('Should be able to find post', async (next) => {
    const postInfo = {
      title: faker.random.words(2),
      content: faker.random.words(10),
    };

    const newPost = await fakePostsRepository.create({
      ...postInfo,
      creator_id: '1',
    });

    const foundPost = await findPostService.execute(newPost.id);

    expect(foundPost).toEqual(expect.objectContaining(postInfo));

    next();
  });

  it('Should throw error on non-existing post', async (next) => {
    try {
      await findPostService.execute('20');
    } catch (err) {
      expect(err).toBeInstanceOf(ServiceError);
    }
    next();
  });
});
