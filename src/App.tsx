import React from 'react';

import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
        {/* <SignUp /> */}
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
