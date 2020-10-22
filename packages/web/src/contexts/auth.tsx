import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import { client } from '../services/client';
import { loginUser } from '../services/queries/user';

export interface IUser {
  id: string;
  name: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface IAuthContext {
  user: IUser;
  token: string;
  signIn(data: ISignInData): Promise<void>;
  signOut(): void;
}

type IAuthState = Omit<IAuthContext, 'signIn' | 'signOut'>;

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    const token = localStorage.getItem('@token');
    const user = localStorage.getItem('@user');

    if (token && user) {
      client.setHeader('authorization', `Bearer ${token}`);

      return setData({ token, user: JSON.parse(user) });
    }
  }, []);

  const signIn = useCallback(async (creds: ISignInData) => {
    const { login } = await client.request<{ login: IAuthState }>(
      loginUser,
      creds
    );

    localStorage.setItem('@user', JSON.stringify(login.user));
    localStorage.setItem('@token', login.token);
    setData(login);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ ...data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthState => useContext(AuthContext);
