import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'; 
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: false
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDiZCXcSqrghynqgXv_qOD8VTiqg1PIP7Y',
      authDomain: 'auth-efae1.firebaseapp.com',
      databaseURL: 'https://auth-efae1.firebaseio.com',
      storageBucket: 'auth-efae1.appspot.com',
      messagingSenderId: '199487556539'
    });

    firebase.auth().onAuthStateChanged((user) => { //this means "call this function whenever the user signs in or out"
      if (user) { //if the user is logged in...
        this.setState({ loggedIn: true});
      }else{
        this.setState({ loggedIn: false});
      }
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