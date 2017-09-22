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
                    title='Log In'
                    color="#841584"
                    accessibilityLabel="Tap to log in"
                />{/*send to homescreen onPress*/}</View>
                <View style={{padding: 10, paddingTop: 0, }} ><Text>OR</Text></View>
                <FbLoginButton LogOrSign={'Log In'}/>
                <View style={{padding: 60}} ><TouchableOpacity>{/*onPress=send to new form*/}
                    <Text>Forgot password?</Text>
                </TouchableOpacity></View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        top: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default LoginForm;