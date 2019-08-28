import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


const Button = (props) => (
  <TouchableOpacity onPress = {props.onPress} style = {props.style}>
    <Text
      style = {
        {
          fontSize: props.fontSize,
          fontWeight: props.bold ? 'bold' : 'normal',
          textAlign: 'center'
        }
      }>
      {props.text}
    </Text>
  </TouchableOpacity>
)

export default Button
