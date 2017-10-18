import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";

import StackOverflowScreen from './StackOverflow';

const StackStackOverflowScreen = StackNavigator({
    Main: {
        screen: StackOverflowScreen,
        navigationOptions:({navigation}) => ({
            color:'red',
            title: "Stack Overflow",
            drawerIcon:  ({tintColor}) => {
              return (
                <IOSIcon name="ios-link"
                  size={24}
                  style={{color: tintColor}}/>
                );
            },
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    }
})

export default StackStackOverflowScreen;
