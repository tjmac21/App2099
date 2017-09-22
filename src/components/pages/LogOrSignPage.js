import React, { Component } from 'react';
import {
  Button,
  Image, 
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LogOrSignButton from '../LogOrSignButton';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

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
        
        this.padding = 100;
    }
        
    componentWillMount () {
        // runs before render
        const log = this.props.isLoggedIn;
        //update state
        this.setState({loggedIn: log});
            
    }

    updateScreen(newScreen) {
        this.padding = 60;
        let screen = this.state.currentScreen;
        screen = newScreen;
        this.setState({
          currentScreen: screen
        })
      }
    
    render(){
        return (
            <View style={{ top: this.padding, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{paddingBottom: this.padding}}><Image
                    source={require('../../img/favicon.png')}
                    style={[styles.logo, { height: 60 }]}
                /></View>
                {this.state.currentScreen === 'main' ? (
                    <LogOrSignButton handleClick={this.updateScreen.bind(this)} />
                  ) : this.state.currentScreen === 'Log In' ? (
                    <LoginForm />
                  ) : this.state.currentScreen === 'Sign Up' ? (
                    <SignupForm />
                  ) : null}
            </View>
        );
    }
}

export default LogOrSign;