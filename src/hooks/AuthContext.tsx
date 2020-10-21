import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface IAuthState {
  token: string;
  user: object;
}

interface IUserData {
  email: string;
  password: string;
}

interface IAuthContext {
  user: object;
  signIn(userData: IUserData): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@GoBaber:token');
    const user = localStorage.getItem('@GoBaber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: IUserData) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBaber:token', token);
    localStorage.setItem('@GoBaber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };