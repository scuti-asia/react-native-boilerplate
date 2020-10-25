import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Register Form!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RegisterForm;