import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import {Provider, connect} from 'react-redux';
import store from './src/store.js'
import DropDown from './src/containers/dropDown.js'
import Root from './src/root.js'



export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider store = {store}>
        <View style = {styles.container}>
          <StatusBar barStyle = 'light-content' />
          <Root />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  },
});
