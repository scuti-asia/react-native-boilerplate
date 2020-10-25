import React from 'react';
import { connect } from 'react-redux';
// import {ActivityIndicator} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './NavigationTabs';
import AuthStack from './AuthStack';

const NavigationStack = (props) => {
  return (
    <NavigationContainer>
      {props.user ? <NavigationTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}

const mapStateToProps = (storeState, ownProps) => {
  let newState = Object.assign({}, ownProps);
  newState.user = storeState.me;

  return newState
}

export default connect(
  mapStateToProps
) (NavigationStack)
