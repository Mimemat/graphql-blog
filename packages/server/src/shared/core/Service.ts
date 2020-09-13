export interface IService<IRequest, IResponse> {
  execute(info: IRequest): IResponse | Promise<IResponse>;
}
