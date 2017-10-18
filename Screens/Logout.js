import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, AsyncStorage } from 'react-native';

export default class LogoutScreen extends Component {
  async onLogoutPressed() {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.goodByeTitle}>
          Good Bye
        </Text>
        <TouchableOpacity style={styles.goodByeButton} onPress={this.onLogoutPressed.bind(this)}>
          <Text style={styles.goodByeButtonText}>
            Logout
          </Text>
        </TouchableOpacity>
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
    goodByeTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginVertical:30,
    },
    goodByeButton: {
      justifyContent: 'center',
      backgroundColor: '#3498db',
      height: 40,
      width: 200,
    },
    goodByeButtonText: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
    }
});
