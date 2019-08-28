import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDown from '../containers/dropDown.js';


const Title = (props) => {
  if(props.gameName === '' || props.gameName === 'Acc-Totals'){
    return(
      <View style = {styles.score}>
        <View style = {styles.title}>
          <Text style = {styles.text}>
            {`${props.gameName === '' ? 'Season' : 'ACC'} Total`}
          </Text>
        </View>
        <View style = {styles.dropDown}>
          <DropDown />
        </View>
      </View>
    )
  }
  else{
    return(
      <View style = {styles.score}>
        <View style = {styles.title}>
          <Text style = {styles.points}>Wake Forest: {props.score.wake}</Text>
          <Text style = {styles.points}>{props.gameName.replace(/_/g, ' ')}: {props.score.opp}</Text>
        </View>
        <View style = {styles.dropDown}>
          <DropDown />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  score:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title:{
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropDown:{
  },
  text:{
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  points:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Title
