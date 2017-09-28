import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FbLoginButton from './FbLoginButton';

class SignupForm extends Component {
    constructor(){
        super();
        this.state = {
            emailText: '',
            pwText: '',
            pwTextConfirm: '',
            error: '',
        };
    }
    handleEmailChange(e) {
        // take a copy of the fish and update it with new data
        let emailText = this.state.emailText;
        emailText = e.target.value;
        this.setState({ emailText });
    } 
    handlePassChange(e) {
        // take a copy of the fish and update it with new data
        let pwText = this.state.pwText;
        pwText = e.target.value;
        this.setState({ pwText });
    }    
    handleConfPassChange(e) {
        // take a copy of the fish and update it with new data
        let pwTextConfirm = this.state.pwTextConfirm;
        pwTextConfirm = e.target.value;
        this.setState({ pwTextConfirm });
        passwordValidation;
    }  
    passwordValidation(){
        if (this.state.pwText != this.state.pwTextConfirm) {
            let error = this.state.error;
            error = "Password not the same";
            this.setState({ error });
        } else {
            let error = this.state.error;
            error = "";
            this.setState({ error });
            // check length (min 6 chars)
            // update screen to confirmation
        }
        this.props.updateScreen('Confirmation');
    }
    render(){
        const { emailText, pwText, pwTextConfirm, error } = this.state;
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChange={(e) => this.handleEmailChange(e)}
                    value={emailText}
                    placeholder="Email"
                    keyboardType='email-address'
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChange={(e) => this.handlePassChange(e)}
                    value={pwText}
                    placeholder="Password (6-20 characters, )"
                    secureTextEntry={true}
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChange={(e) => this.handleConfPassChange(e)}
                    value={pwTextConfirm}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View><Text style={{color:'red'}}>{error}</Text></View>
                <View style={{padding: 25, paddingTop: 15, width: 200}} ><Button
                    title='Sign Up'
                    color="#FFA400"
                    accessibilityLabel="Tap to log in"
                    onPress={this.passwordValidation.bind(this)}
                /></View>
                <FbLoginButton LogOrSign={'Sign Up'}/>
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

export default SignupForm;