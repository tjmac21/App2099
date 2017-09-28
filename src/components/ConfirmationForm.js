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
    },
});

class ConfirmationForm extends Component {
    constructor(){
        super();
        this.state = {
            confirmationCode: '',
        };
    }
    handleTextChange(e) {
        // take a copy of the fish and update it with new data
        let confirmationCode = this.state.confirmationCode;
        confirmationCode = e.target.value;;
        this.setState({ confirmationCode })
    } 
    handleSubmit(){
        //regex clean input
        // validate
        // send to homepage if true
    }
    render(){
        const { confirmationCode } = this.state;
        return (
            <View style={styles.container} >
                <View style={{padding: 10, paddingTop: 0, }} ><TextInput
                    style={{width: 250, height: 40, padding:10, borderColor: 'grey', borderWidth: 1}}
                    onChange={(e) => this.handleTextChange(e)}
                    value={confirmationCode}
                    placeholder="Confirmation Code"
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='send'
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

export default ConfirmationForm;