import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const { email, password } = this.state;
    
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password) //try to sign in
      .catch( () => { //if you failed to log in...
        firebase.auth().createUserWithEmailAndPassword(email, password) //try to create an account
          .catch( () => { //if you failed to create an account...
            this.setState({ error: "Authentication failed."})
          });

      });
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner size="small" />;
    }else{
      return (
        <Button
          whenPressed={this.onButtonPress.bind(this)}
        >
          Log in
        </Button>
      )
    }
  }

  render () {
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Password"
            placeholder="password"
            secureTextEntry //just be listing it, it'll be passed down as "true" (cuz it's a boolean)
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm