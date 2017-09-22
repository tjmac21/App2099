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
import LogOrSignButton from './LogOrSignButton';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

var styles = StyleSheet.create({
    container: {
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class LogOrSign extends Component {
    constructor(){
        super();    
        this.state = {
            loggedIn: null,
            currentScreen: 'main',
        };
        this.updateScreen = this.updateScreen.bind(this);
        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(60);
    }
        
    componentWillMount () {
        // runs before render
        const log = this.props.isLoggedIn;
        alert(this.state.loggedIn);
        //update state
        this.setState({loggedIn: log});
            
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }
        
    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
        
    keyboardWillShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue: event.endCoordinates.height,
            }),
            Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 30,
            }),
        ]).start();
    };
    
    keyboardWillHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue: 0,
            }),
            Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 60,
            }),
        ]).start();
    };

    updateScreen(newScreen) {
        let screen = this.state.currentScreen;
        screen = newScreen;
        this.setState({
          currentScreen: screen
        })
      }
    
    render(){
        return (
            <Animated.View style={{ top: 60, alignItems: 'center', justifyContent: 'center', paddingBottom: this.keyboardHeight }}>
                <Animated.Image
                    source={require('../img/favicon.png')}
                    style={[styles.logo, { height: this.imageHeight }]}
                />
                {this.state.currentScreen === 'main' ? (
                    <LogOrSignButton handleClick={this.updateScreen.bind(this)} />
                  ) : this.state.currentScreen === 'Log In' ? (
                    <Text>login</Text>
                  ) : this.state.currentScreen === 'Sign Up' ? (
                    <Text>signup</Text>
                  ) : null}
            </Animated.View>
        );
    }
}

export default LogOrSign;