import React from 'react';
import { Switch } from 'react-router-dom';

import MyRouter from './MyRouter';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <MyRouter path="/" exact component={SignIn} />
      <MyRouter path="/signup" component={SignUp} />

      <MyRouter path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
