import { inject, injectable } from 'tsyringe';

import { IService } from '@shared/core/Service';

import {
  IPaginatedResponse,
  IPostsRepository,
} from '../repositories/IPostsRepository';

export interface IFindPaginatedDTO {
  page: number;
  max: number;
}

@injectable()
export class FindPaginatedPostsService
  implements IService<IFindPaginatedDTO, IPaginatedResponse> {
  constructor(
    @inject('PostsRepository') private postsRepository: IPostsRepository
  ) {}

  async execute({ max, page }: IFindPaginatedDTO): Promise<IPaginatedResponse> {
    const info = await this.postsRepository.findPaginated({
      max,
      skip: max * page,
    });

    return info;
  }
}
