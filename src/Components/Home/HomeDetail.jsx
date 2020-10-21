import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';

export class HomeDetailComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Detail Page!!!</Text>
        <Button title='Go to detail' onPress={() => {this.props.navigation.navigate('HomeDetail')}}></Button>
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

export default HomeDetailComponent