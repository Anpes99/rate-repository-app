import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'center',
    height: 60,
    backgroundColor: theme.colors.AppBar,
  },
  columnA:{
      alignSelf:'flex-start',
    margin: 5
  },
  ScrollView:{
    flexDirection:"row",
    alignSelf:"center"
  }
  // ...
});

const LinkTab = ({toDest, linkText})=><View style={styles.columnA} >
    <Pressable  ><Link to={toDest} ><Text style={{color:'white'}}  >{linkText}</Text></Link></Pressable>
  </View>;

const AppBar = () => {

  return (
  <View style={styles.container}>
    <ScrollView style={styles.ScrollView} horizontal>
      <LinkTab toDest={"/"} linkText={"repositories"}  />
      <LinkTab toDest={"/login"} linkText={"login"}  />
        </ScrollView>
    </View>);
};

export default AppBar;