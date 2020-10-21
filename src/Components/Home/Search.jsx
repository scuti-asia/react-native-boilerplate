import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';

export class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Page!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SearchComponent
