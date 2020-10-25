import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Components/Home/Home';

const Tabs = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={HomeScreen} />
    </Tabs.Navigator>
  )
}

export default AppTabs