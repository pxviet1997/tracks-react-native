import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text>Account Screen</Text>
        <Button
          title="Sign Out"
          onPress={signOut}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default AccountScreen;