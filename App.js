/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomTextInput from './src/components/CustomTextInput';
import CustomButton from './src/components/CustomButton';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      titleText: "Halo, Selamat Datang!",
      bodyText: 'Sudah ke kebun hari ini? \n Ayo ke kebun dan mulai aktivitasmu di hari yang cerah ini!',
      username: "",
      password: "",
    }
  }

  handleInput = (key, text) => {
    this.setState({ [key]: text });
  };

  submitLogin = () => {
    if (this.state.username == "admin" && this.state.password == "admin") {
      alert("Login berhasil");
    } else {
      alert("Login gagal");
    }
  };

  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.state.titleText}</Text>
        <Text style={styles.bodyText}>{this.state.bodyText}</Text>
        <Text style={styles.labelText}>Username</Text>
        <CustomTextInput placeholder="masukkan username" onChangeText={text => this.handleInput("username", text)} secureTextEntry={false} />
        <Text style={styles.labelText}>Kata Sandi</Text>
        <CustomTextInput placeholder="masukkan kata sandi" onChangeText={text => this.handleInput("password", text)} secureTextEntry={true} />
        <CustomButton
          text="Masuk"
          onPress={this.submitLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  titleText: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },

  bodyText: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 40,
  },

  labelText: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  }
});
