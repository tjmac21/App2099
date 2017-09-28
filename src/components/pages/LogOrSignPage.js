import React, { Component } from 'react';
import {
  Button,
  Image, 
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LogOrSignButton from '../LogOrSignButton';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ForgotPassword from './ForgotPassword';
import ConfirmationForm from '../ConfirmationForm';
import BackButton from '../BackButton';

class LogOrSign extends Component {
    static navigationOptions = {
        header:  null,
    }

    constructor(){
        super();    
        this.state = {
            currentScreen: 'Main',
            screenStack: ['Main'],
        };
        this.updateScreen = this.updateScreen.bind(this);
    }

    componentWillMount(){
        
    }

    updateScreen(newScreen) {
        let screenStack = this.state.screenStack; //copy stack
        let screen = this.state.currentScreen; // copy currentState

        //if back button is pressed (ie if the screen to update is the same as the currentScreen)
        if (newScreen === this.state.currentScreen){
            screenStack.pop(); //pop screen off stack
            this.setState({screenStack}); //set new state stack
            screen = screenStack[screenStack.length - 1]; //set new currentState
        } else { //if another button is pressed (ie not backbutton)
            screenStack.push(newScreen); //push new screen
            this.setState({screenStack}); // set new stack state
            screen = newScreen; //set new currentState
        }
        // update new currentStates
        this.setState({
          currentScreen: screen
        });
    }
    
    render(){
        return (
            <View>
                <View style={{ position: 'absolute', left: 0, top: 0, margin: 20, height: 30,}}>
                {
                    (this.state.currentScreen != 'Main') ? (
                            <BackButton screenToPop={this.state.currentScreen} updateScreen={this.updateScreen.bind(this)} />
                    ) : null
                }
                </View>
                <View style={{top: 80, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{paddingBottom: 80}}><Image
                        source={require('../../img/favicon.png')}
                        style={{ height: 60 }}
                    /></View>
                    {this.state.currentScreen === 'Main' ? (
                        <LogOrSignButton handleClick={this.updateScreen.bind(this)} /> 
                    ) : this.state.currentScreen === 'Log In' ? (
                        <LoginForm prevScreen={this.state.currentScreen} updateScreen={this.updateScreen.bind(this)} />
                    ) : this.state.currentScreen === 'Sign Up' ? (
                        <SignupForm prevScreen={this.state.currentScreen} updateScreen={this.updateScreen.bind(this)} />
                    ) : this.state.currentScreen === 'Forgot Password' ? (
                        <ForgotPassword prevScreen={this.state.currentScreen} updateScreen={this.updateScreen.bind(this)} />
                    ) : this.state.currentScreen === 'Confirmation' ? (
                        <ConfirmationForm prevScreen={this.state.currentScreen} updateScreen={this.updateScreen.bind(this)} />
                    ) : null}
                </View>
            </View>
        );
    }
}

export default LogOrSign;
