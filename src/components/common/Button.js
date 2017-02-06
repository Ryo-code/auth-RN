import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity 
      onPress={whenPressed}
      style={buttonStyle}
    >
      <Text style={textStyle}> 
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
}

export { Button }; //ES5-> "{ Button: Button }"
//The key is "Button", which is used in index.js;
//The value is Button, which refers to const Button;
//but since the key & value are both "Button",
//ES6 allows us to only write Button once