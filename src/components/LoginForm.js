import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
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
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.emailText}
            />
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.pwText}
            />
            <View style={{padding: 25, paddingTop: 0, width: 275}} ><Button
                title='Log In'
                color="#26A65B"
                accessibilityLabel="Tap to log in"
                onPress={this.updateScreen.bind(this)}
            /></View>
                <Text>Login With Facebook:</Text>
                <FbLoginButton />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default LoginForm;