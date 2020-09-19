import React from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';

class HomeComponent extends React.Component {
  constructor(){
 
    super();
 
    this.state = {
      // This is our Default number value
      NumberHolder : 1
    }

    this.GenerateRandomNumber = this.GenerateRandomNumber.bind(this);
  }
 
  GenerateRandomNumber() {
    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
    
    this.setState({
      NumberHolder : RandomNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>
   
        <Button title="Generate Random Number" onPress={this.GenerateRandomNumber} />
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

export default HomeComponent;