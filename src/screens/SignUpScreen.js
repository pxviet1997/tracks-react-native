import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signUp}
        submitButtonText="Sign Up"
      />
      <NavLink
        routeName="SignIn"
        navText="Already have an account? Sign in instead"
      />

    </View>
  );
};

SignUpScreen.navigationOptions = () => {
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

export default SignUpScreen;