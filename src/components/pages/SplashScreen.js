import React, { Component } from 'react';
import {
  Image, 
  StyleSheet,
  View,
} from 'react-native';
import LogOrSignPage from './LogOrSignPage';

class SplashScreen extends Component {  
    static navigationOptions = {
        header:  null,
    }
    constructor() {
      super();
      this.state = {
        loggedIn: {},
      };
    }
    //check if logged in
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../img/favicon.png')}
                />
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