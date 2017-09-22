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
        };
    }
    render(){
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.emailText}
                    placeholder="Email"
                    keyboardType='email-address'
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.pwText}
                    placeholder="Password"
                    secureTextEntry={true}
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 25, paddingTop: 15, width: 200}} ><Button
                    title='Sign Up'
                    color="#FFA400"
                    accessibilityLabel="Tap to log in"
                />{/*send to homescreen onPress*/}</View>
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