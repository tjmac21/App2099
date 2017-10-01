import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  Image, 
  StyleSheet,
  View,
} from 'react-native';
import LogOrSignPage from './LogOrSignPage';
import * as firebase from "firebase";
import { goToLogin } from '../../config/router';

class Settings extends Component {  
    static navigationOptions = {
        header:  null,
    }
    constructor() {
      super();
    }
    setLoggedIn(value) {
        AsyncStorage.setItem('loggedIn', value);
     }
    signOut(navigation){
        firebase.auth().signOut().then(function() {
            this.setLoggedIn(JSON.stringify(false));
            alert('Signed Out');
            // go to login page
            navigation.dispatch(goToLogin);
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }
    //check if logged in
    render() {
        return (
            <View style={styles.container}>
                <Button title='Sign Out' onPress={() => this.signOut(this.props.navigation)} />
                <Button title='Sign Out' onPress={() => this.signOut(this.props.navigation)} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
  });

export default Settings;