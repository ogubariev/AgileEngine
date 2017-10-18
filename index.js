import React, { Component } from 'react';
import { AppRegistry,  Easing, Animated} from 'react-native';
import { DrawerNavigator, StackNavigator} from 'react-navigation';

import StackHomeScreen from './Screens/StackHomeScreen';
import StackStackOverflowScreen from './Screens/StackStackOverflowScreen';
import StackLogoutScreen from './Screens/StackLogoutScreen';

import LoginScreen from './Screens/Login';


const Main = DrawerNavigator(
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
},
{
  initialRouteName: 'Home',
  drawerWidth: 300,
  contentOptions: {
    activeTintColor: '#1abc9c',
  },
}
);

const ModalNavigator = StackNavigator(
 {
   Login: { screen: LoginScreen },
   Main: { screen: Main },
 },
 {
   initialRouteName: 'Login',
   headerMode: 'none',
   mode: 'modal',
   navigationOptions: {
     gesturesEnabled: false,
   },
   transitionConfig: () => ({
     transitionSpec: {
       duration: 500,
       easing: Easing.out(Easing.poly(4)),
       timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { position, scene } = sceneProps;
       const { index } = scene;

       const opacity = position.interpolate({
           inputRange: ([index - 1, index, index + 0.99, index + 1]),
           outputRange: ([0, 1, 1, 0]),
       });

       return { opacity };
     },
   }),
 }
);

AppRegistry.registerComponent('AgileEngine', () => ModalNavigator);
