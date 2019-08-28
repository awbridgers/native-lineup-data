import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/button.js'
import Title from '../components/headerTitle.js'
import * as actions from '../actions/index.js'


export class Header extends Component{
  dataGroupClick = () =>{
    const newType = (this.props.dataGroup === 'lineup') ? 'player' : 'lineup';
    this.props.changeDataGroup(newType);
  }
  changeInfoClick = () =>{
    const newType = this.props.infoType === 'overview' ? 'advanced' : 'overview';
    this.props.changeInfoType(newType);
  }
  changeGlossaryClick = () =>{
    this.props.changeGlossaryActive(!this.props.glossary);
  }
  changeFinderClick = () =>{
    this.props.changeFinderActive(!this.props.finderActive)
  }
  render(){
    const {gameName, individualGames} = this.props;
    return (
      <View style = {styles.container}>
        <View style = {styles.buttonView}>
          <Button
            text = 'Lineup Finder'
            style = {styles.button}
            bold
            fontSize = {18}
            onPress = {this.changeFinderClick}
          />
          <Button
            text = {this.props.glossary ? 'Back' : 'Glossary'}
            style = {styles.button}
            bold
            fontSize = {18}
            onPress = {this.changeGlossaryClick}
          />
        </View>
        <Title
          gameName = {gameName}
          score = {(gameName !== '' && gameName !== 'Acc-Totals') ?
            individualGames[gameName].score : null}
          />
        <View style = {styles.buttonView}>
          <Button
            text = {this.props.dataGroup === 'lineup' ? 'View Players' : 'View Lineups'}
            style = {styles.button}
            bold
            fontSize = {18}
            onPress = {this.dataGroupClick}
            />
          <Button
            text = {this.props.infoType === 'overview' ? 'Advanced' : 'Overview'}
            style = {styles.button}
            bold
            fontSize = {18}
            onPress = {this.changeInfoClick}
            />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  buttonView:{
    flexDirection: 'column'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
    height: 50,
    width: 90,
    margin: 5,
  }
});

const mapStateToProps = (state) =>({
  gameName: state.gameName,
  glossary: state.glossary,
  individualGames: state.individualGames,
  dataGroup: state.dataType,
  infoType: state.infoType,
  finderActive: state.finderActive,

})
const mapDispatchToProps = (dispatch) =>({
  changeDataGroup: (type)=> dispatch(actions.changeDataType(type)),
  changeInfoType: (type)=> dispatch(actions.changeInfoType(type)),
  changeGlossaryActive: (active)=> dispatch(actions.changeGlossaryActive(active)),
  changeFinderActive: (active)=> dispatch(actions.changeFinderActive(active)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
