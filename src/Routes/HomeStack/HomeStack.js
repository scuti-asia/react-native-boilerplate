import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Components/Home/Home';
import HomeDetailScreen from '../../Components/Home/HomeDetail';
const Stack = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerTitle: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "Home Detail"
        }}
        name="HomeDetail"
        component={HomeDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeStack