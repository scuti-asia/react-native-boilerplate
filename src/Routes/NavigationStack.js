import React from 'react';
// import { connect } from 'react-redux';
// import {ActivityIndicator} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import NavigationTabs from './NavigationTabs';
// import Center from '../Components/Parts/Center';
import AuthStack from './AuthStack';

const NavigationStack = (props) => {
  // if(props.loading) {
  //   return (
  //     <Center>
  //       <ActivityIndicator size="large" />
  //     </Center>
  //   )
  // }
  return (
    <NavigationContainer>
      {/* {props.user ? <NavigationTabs /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  )
}

export default NavigationStack