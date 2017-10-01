import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  Image, 
  Animated, 
  Keyboard,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { goToHome } from '../../config/router';
import * as firebase from "firebase";

class LogOrSignButton extends Component {
    constructor(){
        super();
    }
    setLoggedIn(value) {
        AsyncStorage.setItem('loggedIn', value);
    }
    goHomePressed(event){
        event.preventDefault();
    
        firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
              this.setLoggedIn(JSON.stringify(true));
              // User is signed in.
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              // ...
            } else {
              // User is signed out.
              // ...
            }
            // ...
          });
          
        Alert.alert(
            'Attention:',
            'Continuing anoynmously will result in limited functionality of the app',
            [
                {text: 'Cancel', onPress: () => null},
                {text: 'Continue', onPress: () => this.props.navigation.dispatch(goToHome)},
            ]
        );
        // dont forget to add firebase token to continue anoynmously
      }

  render() {
    return (
        <View style={styles.container}>
            <View style={{padding: 10, paddingTop: 0, width: 200}} ><Button
                    title='Log In'
                    color="#841584"
                    accessibilityLabel="Tap to log in"
                    onPress={() => this.props.handleClick('Log In')}
                /></View>
                <View style={{padding: 10, width: 200}} ><Button
                    title='Sign Up'
                    color="#FFA400"
                    accessibilityLabel="Tap to sign up"
                    onPress={() => this.props.handleClick('Sign Up')}
                /></View>
                <View style={{padding: 20, width: 200}} ><Button
                    title='Continue Anonymously'
                    color="#19B5FE"
                    accessibilityLabel="Tap to continue anonymously"
                    onPress={this.goHomePressed.bind(this)}
                /></View>
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

export default LogOrSignButton;