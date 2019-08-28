import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import DropDown from './containers/dropDown.js'
import Header from './containers/header.js'


const Root = (props) =>(
  <View style = {styles.container}>
  {props.dataLoaded &&
    <Header />
  }
  </View>

)


const mapStateToProps = (state)=>({
  dataLoaded: state.dataLoaded
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});

export default connect(mapStateToProps)(Root)
