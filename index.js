import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { DrawerNavigator} from 'react-navigation';

import StackHomeScreen from './Screens/StackHomeScreen';
import StackStackOverflowScreen from './Screens/StackStackOverflowScreen';
import StackLogoutScreen from './Screens/StackLogoutScreen';

import LoginScreen from './Screens/Login';


const drawernav = DrawerNavigator(
  {
    Home: {
        screen: StackHomeScreen,
    },
    StackOverflow: {
        screen: StackStackOverflowScreen,
    },
    Logout: {
        screen: StackLogoutScreen,
    },
    Login: {
        screen: LoginScreen,
    },
},
{
  initialRouteName: 'Home',
  drawerWidth: 300,
  contentOptions: {
    activeTintColor: '#1abc9c',
  },
}
);

AppRegistry.registerComponent('AgileEngine', () => drawernav);
