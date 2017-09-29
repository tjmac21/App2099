import React from 'react';
import {Text} from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions, DrawerNavigator } from 'react-navigation';
import MapContainer from '../components/home/MapContainer';
import CreateMessage from '../components/home/CreateMessage';
import SplashScreen from '../components/pages/SplashScreen';
import LogOrSignPage from '../components/pages/LogOrSignPage';
import PanResponderExample from '../components/pages/PanResponderExample';
import Animations from '../components/pages/Animations';

export const goToHome = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'HomeTabs' })]
});

export const LoginFlow = StackNavigator({
    LogOrSignPage: {
      screen: LogOrSignPage,
    },
});

// tab on top
// no such tab when not logged in
export const NavTabs = TabNavigator({
  Home: {
    screen: MapContainer,
    navigationOptions: {
      tabBarLabel: 'Drop',
      headerRight: <CreateMessage />
      // pull down header to "refresh" screen
      // craete fatter header with nice background and logo
      // use tear drop icon
      // make tab "behind" map card
    },
  },
  Profile: {
    screen: PanResponderExample,
    navigationOptions: {
      tabBarLabel: 'Profile', 
      // use lil person icon
    },
  },
  Notifications: {
    screen: Animations,
    navigationOptions: {
      tabBarLabel: 'Notifcations:',
      //use bell icon
    },
  },
  Settings: {
    screen: SplashScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      // use cog icon
    },
  },
}, {
  tabBarPosition: "bottom",
  lazy: true, // newly added
  tabBarOptions: {
    activeTintColor: '#DB5A6B',
    inactiveTintColor: '#FFB3A7',
    indicatorStyle: {
      borderBottomColor: '#DB5A6B',
      borderBottomWidth: 3,
    },
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#FFF',
    },
  }
});

export const Root = StackNavigator({
  LoginFlow: { screen: LoginFlow, }, //check if logged in state is true
  HomeTabs: { screen: NavTabs, },
}, {
  headerMode: null,
});