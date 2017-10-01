import React, { Component } from 'react';
import {
  AsyncStorage,
  StatusBar,
  Image, 
  StyleSheet,
  View,
} from 'react-native';
import LogOrSignPage from './LogOrSignPage';
import { goToHome } from '../../config/router';
import { goToLogin } from '../../config/router';
import * as firebase from "firebase";

class SplashScreen extends Component {  
    static navigationOptions = {
        header:  null,
    }
    constructor(props) {
        super(props);
    }
    isLoggedIn() {
        AsyncStorage.getItem('loggedIn').then((value) => { if(JSON.parse(value)) {this.props.navigation.dispatch(goToHome)} else {this.props.navigation.dispatch(goToLogin)} });
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#000"
                    barStyle="dark-content"
                />
                <View style={styles.container}>
                    <Image
                        source={require('../../img/favicon.png')}
                        onLoad={this.isLoggedIn()}
                    />
                </View>
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
      backgroundColor: '#000000',
    },
  });

export default SplashScreen;