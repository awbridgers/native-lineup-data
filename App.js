import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store.js'

export default class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <View style = {styles.container}>
        <Text>Hello There!</Text>
      </View>
    </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
