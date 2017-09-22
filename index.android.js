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
import LogOrSignPage from './src/components/LogOrSignPage';

export default class App2099 extends Component {
  constructor(props) {
    super(props);
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
        <View>
            <LogOrSignPage isLoggedIn={this.state.loggedIn}/>
        </View>
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
