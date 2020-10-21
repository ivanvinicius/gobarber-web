import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface IUserData {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(userData: IUserData): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: IUserData) => {
    const response = await api.post('/sessions', { email, password });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'ivan', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
