import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';


export const LoginStack = StackNavigator({
    LogOrSignButton: {
      screen: LogOrSignButton,
      navigationOptions: {
        title: 'Feed',
      },
    },
    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Feed',
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: 'Feed',
      },
    },
    ConfirmationForm: {
      screen: ConfirmationForm,
      navigationOptions: {
        title: 'Feed',
      },
    },
  });