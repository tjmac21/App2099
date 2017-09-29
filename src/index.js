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

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
      return (
            <Root />
      );
  }
}

export default App;
