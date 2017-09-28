import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FbLoginButton from './FbLoginButton';



class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            emailText: '',
            pwText: '',
        };
    }
    handleEmailChange(e) {
        // take a copy of the fish and update it with new data
        let emailText = this.state.emailText;
        emailText = e.target.value;;
        this.setState({ emailText })
    } 
    handlePassChange(e) {
        // take a copy of the fish and update it with new data
        let pwText = this.state.pwText;
        pwText = e.target.value;;
        this.setState({ pwText })
    }       
    forgotPassword(event){
        event.preventDefault();
        this.props.updateScreen('Forgot Password');
    }  
    goHome(){
        
    }
    render(){
        const { emailText, pwText } = this.state;
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
                    placeholder="Password"
                    secureTextEntry={true}
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 25, paddingTop: 15, width: 200}} ><Button
                    title='Log In'
                    color="#841584"
                    accessibilityLabel="Tap to log in"
                    onPress={this.goHome.bind(this)}
                />{/*send to homescreen onPress*/}</View>
                <View style={{padding: 10, paddingTop: 0, }} ><Text>OR</Text></View>
                <FbLoginButton LogOrSign={'Log In'}/>
                <View style={{padding: 60}} ><TouchableOpacity onPress={this.forgotPassword.bind(this)}>{/*onPress=send to new form*/}
                    <Text>Forgot password?</Text>
                </TouchableOpacity></View>
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

export default LoginForm;