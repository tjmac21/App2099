import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
    super(props);
    this.state = {
      loaded: false,
    };
  }
  
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
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
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth()}>
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Screen...
        </Text>
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
    backgroundColor: '#F5FCFF',
  },
});

export default FbLoginButton;