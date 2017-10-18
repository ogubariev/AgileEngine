import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

const USERNAME_KEY = 'username_key';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  redirect(routeName){
    // this.props.navigator.push({
    //   name: routeName
    // });
  }

  storeAuthInfo(responseData){
    AsyncStorage.setItem(USERNAME_KEY, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
      console.log("error is: " + err);
    });
  }

  async onLoginPressed() {
    var {username, password} = this.state;
    console.log('Username: ' + username + 'Password: ' + password);

    try {
      if (username.length != 0 && password.length != 0) {
        this.storeAuthInfo(this.state.username);
        this.redirect('home');
      } else {
        throw 'Username and password can\'t be empty.'
      }
    } catch(error) {
      Alert.alert(
        'Sorry',
        error,
        { cancelable: true }
      )
      console.log("error " + error);
    }
  }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome</Text>
              </View>
              <View style={styles.inputContainer}>
                <IOSIcon name="ios-person"
                  size={35}/>
                <TextInput style={styles.input}
                  placeholder='Username'
                  returnKeyType='next'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={ (text)=> this.setState({username: text}) }
                  onSubmitEditing={() => this.passwordInput.focus()}
                  >
                </TextInput>
              </View>
              <View style={styles.inputContainer}>
                <IOSIcon name="ios-lock"
                  size={35}/>
                <TextInput style={styles.input}
                  secureTextEntry={true}
                  placeholder='Password'
                  returnKeyType='go'
                  ref={(input) => this.passwordInput = input}
                  onChangeText={ (text)=> this.setState({password: text}) }
                  >
                </TextInput>
              </View>

              <TouchableOpacity style={styles.loginButton} onPress={this.onLoginPressed.bind(this)}>
                <Text style={styles.loginButtonText}>
                  Login
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '30%',
      marginBottom: 30,
    },
    titleText: {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      padding: 5,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      backgroundColor: '#e0e0e0',
    },
    loginButton: {
      justifyContent: 'center',
      backgroundColor: '#3498db',
      height: 40,
      marginVertical: 20,
    },
    loginButtonText: {
      alignSelf: 'center',
      fontSize: 20,
      color: 'white',
    }
});
