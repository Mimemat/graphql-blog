import {
  ApolloServerExpressConfig,
  AuthenticationError,
} from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import { authConfig } from '@config/auth';

export interface IContext {
  userId: string;
}

export const auth: ApolloServerExpressConfig['context'] = ({ req }) => {
  const authInfo = req.headers.authorization || '';

  if (!authInfo) {
    return { userId: '' };
  }

  const [, token] = authInfo.split(' ');

  try {
    const { id } = (jwt.verify(token, authConfig.secret) as { id: string }) || {
      id: '',
    };

    return {
      userId: id,
    };
  } catch (err) {
    throw new AuthenticationError('Invalid token');
  }
};
