import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FbLoginButton from './FbLoginButton';

class SignupForm extends Component {
    render(){
        return (
            <View style={styles.container} >
                <Text style={{color: 'black'}}>Signup</Text>
            </View>
        );
    }
    
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

export default SignupForm;