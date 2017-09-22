import React, { Component } from 'react';
import {
  Button,
  Image, 
  Animated, 
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class LogOrSignButton extends Component {

  switchView(handleClick) {
    return (
        <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0, width: 200}} ><Button
                title='Log In'
                color="#841584"
                accessibilityLabel="Tap to log in"
                onPress={() => handleClick('Log In')}
            /></View>{/*css animation to move down*/}
            <View style={{padding: 10, width: 200}} ><Button
                title='Sign Up'
                color="#FFA400"
                accessibilityLabel="Tap to sign up"
                onPress={() => handleClick('Sign Up')}
            /></View>{/*css animation to move down*/}
        </View>
    );
  }

  render() {
    return (
        <View>
          {this.switchView(this.props.handleClick)}
        </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default LogOrSignButton;