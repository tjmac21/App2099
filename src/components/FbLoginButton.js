import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBbEfdE5anIq9jhTZKQYQQGSlbtkCICpe4',
  authDomain: 'app2099-ffbce.firebaseapp.com/',
  databaseURL: 'https://app2099-ffbce.firebaseio.com/',
}

const firebaseRef =  firebase.initializeApp(config);

class FbLoginButton extends Component {
  constructor(props) {
    super();
  }
  
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email','user_friends']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((accesTokenData) => {
            const credential = firebase.auth.FacebookAuthProvider.credential(accesTokenData.accessToken)
            firebase.auth().signInWithCredential(credential).then((result) => {
              // promise was success
            }, (error) => {
              //promise ws reject
              alert(error);
            })
          }, (error) => {
            alert('Some error occured : ' + error);
          })
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
          onPress={this._fbAuth}
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