import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FbLoginButton from './FbLoginButton';
import { goToHome } from '../../config/router';
import * as firebase from "firebase";

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

    setLoggedIn(value) {
        AsyncStorage.setItem('loggedIn', value);
     }

    signup() {
            try {
                firebase.auth()
                    .createUserWithEmailAndPassword(this.state.emailText, this.state.pwText)
                    .then( () => {
                        this.setLoggedIn(JSON.stringify(true));
                        console.log("Logged In!");
                        this.props.navigation.dispatch(goToHome);
                    }).catch( 
                        (error) => {
                            alert("ERROR BIATCH: " + error);
                            this.setState({error});
                    });
        
            } catch (error) {
                console.log(error.toString());
                this.setState({error});
            } 
    }

    render(){
        const { email, pass, passconfirm, error } = this.state;
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    ref= {(input) => { this.emailText = input; }}
                    onChangeText={(emailText) => this.setState({emailText})}
                    value={email}
                    placeholder="Email"
                    keyboardType='email-address'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    ref= {(input) => { this.pwText = input; }}
                    onChangeText={(pwText) => this.setState({pwText})}
                    value={pass}
                    placeholder="Password (6-20 characters, )"
                    secureTextEntry={true}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    ref= {(input) => { this.pwtextconfirm = input; }}
                    onChangeText={(pwTextConfirm) => this.setState({pwTextConfirm})}
                    value={passconfirm}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View><Text style={{color:'red'}}>{error}</Text></View>
                <View style={{padding: 25, paddingTop: 15, width: 200}} ><Button
                    title='Sign Up'
                    color="#FFA400"
                    accessibilityLabel="Tap to log in"
                    onPress={this.signup.bind(this)}
                /></View>
                <FbLoginButton LogOrSign={'Sign Up'}  navigation={this.props.navigation}/>
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

export default SignupForm;