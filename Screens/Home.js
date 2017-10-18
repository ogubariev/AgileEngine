import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import {USERNAME_KEY} from './Login';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeText: 'Hello',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    try {
      var value = await AsyncStorage.getItem(USERNAME_KEY);
      if (value !== null){
        var message = 'Hello, '+ value;
        this.setState({welcomeText: message});
      } else {
        throw 'Username is null';
      }
    } catch (error) {
      console.log('Erorr' + error);
    }
  }

  render() {
    var welcomeText =  this.state.welcomeText;

    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>
          {welcomeText}!
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200,
    },
    welcomeTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
    },
});
