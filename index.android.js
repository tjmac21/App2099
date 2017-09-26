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
import SplashScreen from './src/components/pages/SplashScreen';
import LogOrSignPage from './src/components/pages/LogOrSignPage';
import MapTest from './src/components/MapTest';

export default class App2099 extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Logged In...
          </Text>
        </View>
      );
    }

  render() {
    if (this.state.loggedIn){
      renderLoadingView();
    } else {
      return (
            <LogOrSignPage />

      );
    }
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

AppRegistry.registerComponent('App2099', () => App2099);
