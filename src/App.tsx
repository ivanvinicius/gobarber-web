import React from 'react';

import GlobalStyle from './styles/global';
import AuthContext from './hooks/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'ivan' }}>
        <SignIn />
        {/* <SignUp /> */}
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
