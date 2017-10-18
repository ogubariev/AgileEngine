import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";

import HomeScreen from './Home';

const StackHomeScreen = StackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions:({navigation}) => ({
            title: "Home",
            drawerIcon:  ({tintColor}) => {
              return (
                <IOSIcon name="ios-home"
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

export default StackHomeScreen;
