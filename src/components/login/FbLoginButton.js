import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import * as firebase from "firebase";
import { goToHome } from '../../config/router';

class FbLoginButton extends Component {
  constructor(props) {
    super();
    this._fbAuth = this._fbAuth.bind(this);
  }
  
  _fbAuth(navi) {    
    LoginManager.logInWithReadPermissions(['user_about_me','public_profile', 'email','user_friends','user_photos']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((accesTokenData) => {
            const credential = firebase.auth.FacebookAuthProvider.credential(accesTokenData.accessToken);
            firebase.auth().signInWithCredential(credential).then((result) => {
              // promise was success
              AsyncStorage.setItem('loggedIn', JSON.stringify(true));
            }, (error) => {
              //promise ws reject
              alert(error);
            });
            navi.dispatch(goToHome);
          }, (error) => {
            alert('Some error occured : ' + error);
          });
        }
      }, function(error) {
        alert('An error occured: ' + error);
      });
      //send to home page
    }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._fbAuth(this.props.navigation)}
          title={`${this.props.LogOrSign} With Facebook`}
          color="#4267B2"
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default FbLoginButton;