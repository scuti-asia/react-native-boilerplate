import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const LoginForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Login Form!!!</Text>
      <Button
        title="Go to Register page"
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
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

export default LoginForm;