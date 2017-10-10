import React, { Component } from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Root  } from './config/router';
import * as firebase from "firebase";
// Initialize Firebase
const FirebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyBbEfdE5anIq9jhTZKQYQQGSlbtkCICpe4',
    authDomain: 'app2099-ffbce.firebaseapp.com',
    databaseURL: 'https://app2099-ffbce.firebaseio.com',
    storageBucket: 'app2099-ffbce.appspot.com',
 });

class App extends Component {
  render() {
      return (
            <Root />
      );
  }
}

export default App;
