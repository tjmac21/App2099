import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

class ForgotPassword extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
        };
    }
    handleEmailChange(e) {
        // take a copy of the fish and update it with new data
        let email = this.state.email;
        email = e.target.value;;
        this.setState({ email })
    } 
    handleSubmit() {
        //onpress send email and update screen to confirmation page
    }
    render(){
        const { email } = this.state;
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChange={(e) => this.handleEmailChange(e)}
                    value={email}
                    placeholder="Email"
                    keyboardType='email-address'
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                /></View>
                <View style={{padding: 25, paddingTop: 15, width: 200}} ><Button
                    title='Submit'
                    color="#841584"
                    accessibilityLabel="Tap to submit"
                    onPress={this.handleSubmit.bind(this)}
                /></View>
            </View>
        );
    }
}

export default ForgotPassword;