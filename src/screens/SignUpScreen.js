import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text>Sign Up</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to Main FLow"
        onPress={() => navigation.navigate('TrackList')}
      />
    </>
  );
};

const styles = StyleSheet.create({

});

export default SignUpScreen;