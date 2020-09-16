import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import NavigationStack from '../../Routes/NavigationStack'

const App = () => {
  return (
    <NavigationStack />
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