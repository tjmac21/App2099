import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FbLoginButton from './FbLoginButton';
import { goToHome } from '../../config/router';
import * as firebase from "firebase";

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
    setLoggedIn(value) {
        AsyncStorage.setItem('loggedIn', value);
     }
    goHome(){
        try {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.emailText, this.state.pwText)
                .then( 
                    () => {
                        this.setLoggedIn(JSON.stringify(true));
                        console.log("Logged In!");
                        this.props.navigation.dispatch(goToHome);
                    })
                .catch( 
                    (error) => {
                        alert("ERROR BIATCH: " + error);
                    });
            
    
    
            // Navigate to the Home page
    
        } catch (error) {
            console.log(error.toString());
        }
        //verify login information
        // dont forget to add firebase token to continue with logged in info
    }
    render(){
        const { emailText, pwText } = this.state;
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    ref= {(input) => { this.emailText = input; }}
                    onChangeText={(emailText) => this.setState({emailText})}
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
                    ref= {(input) => { this.pwText = input; }}
                    onChangeText={(pwText) => this.setState({pwText})}
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
    },
});

export default LoginForm;