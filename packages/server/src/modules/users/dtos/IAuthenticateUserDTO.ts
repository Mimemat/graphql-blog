import { User } from '../infra/typeorm/entities/User';

export interface IAuthenticateUserDTO {
  email: string;
  password: string;
}

export interface IAuthenticateResponse {
  token: string;
  user: User;
}
