import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'; 
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDiZCXcSqrghynqgXv_qOD8VTiqg1PIP7Y',
      authDomain: 'auth-efae1.firebaseapp.com',
      databaseURL: 'https://auth-efae1.firebaseio.com',
      storageBucket: 'auth-efae1.appspot.com',
      messagingSenderId: '199487556539'
    });
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;