import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MapTest from '../components/MapTest';
import SplashScreen from '../components/pages/SplashScreen';
import LogOrSignPage from '../components/pages/LogOrSignPage';

export const Home = StackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: 'Map',
      },
    },
    MapTest: {
      screen: MapTest,
      navigationOptions: {
        title: 'Map',
      },
    },
  });

export const LoginFlow = StackNavigator({
    LogOrSignPage: {
      screen: LogOrSignPage,
      navigationOptions: {
        title: 'Map',
      },
    },
});

export const Root = StackNavigator({
  Home: {
    screen: Home,
  },
  LoginFlow: {
    screen: LoginFlow,
  },
}, {
  mode: 'card',
  headerMode: 'none',
});