import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'; //it will automatically search for "index" file, so you don't need to specify it ;)

class App extends Component {
  render(){
    return (
      <View>
        <Text>An app!</Text>
      </View>
    );
  }
}

export default App;