import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';
const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerTitle: "Sign In"
        }}
        name="Login"
        component={LoginForm}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign up"
        }}
        name="Register"
        component={RegisterForm}
      />
    </Stack.Navigator>
  )
}

export default AuthStack