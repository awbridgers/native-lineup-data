import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ModalSelector from 'react-native-modal-selector';
import { AntDesign } from '@expo/vector-icons';
import {chooseGame} from '../actions/index.js'

export class DropDown extends Component {
  changeGame = (itemValue) =>{
    this.props.changeGame(itemValue)
  }
  render(){
    const gamesList = Object.keys(this.props.individualGames)
      .sort((a,b)=>this.props.individualGames[a].order - this.props.individualGames[b].order)
      .map((game,i)=>({label: game.replace(/_/g, ' '), value: game, key: i+2}))
    const selectorArray = [
      {label: 'Season Total', value: '', key:0},
      {label: 'ACC Total', value: 'Acc-Totals', key:1},
      ...gamesList];
    return(
      <View>
        <ModalSelector
          data = {selectorArray}
          labelExtractor = {item => item.label.replace(/_/g, ' ')}
          onChange = {(selection) => this.changeGame(selection.value)}
          initValue = 'Select a Game'
        >
          <View style={styles.select}>
            <Text style ={{fontSize: 18}}>{`--Select a Game--`} <AntDesign name = 'caretdown' size ={16} /></Text>

          </View>
        </ModalSelector>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  select: {
    borderWidth:3,
    backgroundColor:'#ccc',
    textAlign: 'center',
    height: 40,
    justifyContent: 'center'
  }
});

const mapDispatchToProps = dispatch =>({
  changeGame: (team)=>dispatch(chooseGame(team)),

})
const mapStateToProps = (state) => ({
  individualGames: state.individualGames
})

export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
