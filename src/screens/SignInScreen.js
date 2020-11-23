import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = () => {
  const { state, signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        submitButtonText="Sign In"
      />
      <NavLink
        routeName="SignUp"
        navText="Don't have an account? Sign up instead"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignInScreen;