import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'flex-start',
    flexGrow:1,
    height: 60,
    backgroundColor: theme.colors.AppBar
  },
  columnA:{
      alignSelf:'flex-end',
    margin: 5
  }
  // ...
});

const AppBar = () => {
    const [pressed, setPressed] = useState(false)

  return (
  <View style={styles.container}>
      <View style={styles.columnA} >
          <Pressable  onPress={()=>{setPressed(!pressed)}}><Text style={{color: pressed ? "white": "black"}} >repositories</Text></Pressable>
        </View>
    </View>);
};

export default AppBar;