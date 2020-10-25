import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Provider } from "react-redux";
import Store from '../../Lib/redux';

import NavigationStack from '../../Routes/NavigationStack'

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationStack />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;