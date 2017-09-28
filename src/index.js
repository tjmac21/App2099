import React, { Component } from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Home, Root, LoginFlow } from './config/router';
import SplashScreen from './components/pages/SplashScreen';
import LogOrSignPage from './components/pages/LogOrSignPage';
import MapTest from './components/MapTest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    if (this.state.loggedIn){
      renderLoadingView();
    } else {
      return (
            <LoginFlow />

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

export default App;
