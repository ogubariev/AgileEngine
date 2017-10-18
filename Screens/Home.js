import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    var welcomeText = 'Hello!'

    console.log('Start render' + welcomeText)
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
        alignItems: 'center'
    },
    welcomeTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
    },
});
