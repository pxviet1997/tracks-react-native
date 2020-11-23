import React, { useEffect, useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const AuthScreen = () => {
  const { localSignIn } = useContext(AuthContext);

  useEffect(() => {
    localSignIn();
  }, []);

  return null;
};

export default AuthScreen;