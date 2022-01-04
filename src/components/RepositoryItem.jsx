import React from "react";
import { View,Image, StyleSheet } from "react-native";
import Text from "./Text";

export const thousandsToKilosWithK = (value) => value >= 1000 ?  String(Math.round(value/100) / 10)+"k" : value;

const InfoColumn = ({text, value, id})=>{
 value = thousandsToKilosWithK(value);
  return(
    <View>
      <Text testID={`repositoryItem-${text}-${id}`} style={{alignSelf:"center"}} fontWeight={"bold"} >{value}</Text>
        <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 10 ,
    paddingRight:15,
    marginLeft:0,
    marginRight:0
  },
  rowA_columnA:{
    marginRight:10
  },
  rowA_columnB:{
    justifyContent:"space-between",
    width:330
},
  rowA : {
    flexDirection: 'row'
  },
  rowB : {
flexDirection:"row",
justifyContent:"space-around"
  },
  textTag: {
    backgroundColor: 'orange',
    padding:5,
    alignSelf:'flex-start',
    borderRadius: 10,
    marginTop: 3,
    marginBottom:5
  }
  // ...
});


const RepositoryItem = ({item})=>{


    return(
        
        <View  style={styles.container}>

      <View style={styles.rowA} >
        <View style={styles.rowA_columnA} >

        <Image style={{width:50, height:50, borderRadius:6}} source={{uri: item.ownerAvatarUrl}} ></Image>

        </View>
<View style={styles.rowA_columnB} >
  <Text testID={`repositoryItem-Name-${item.id}`} fontWeight={"bold"} >{item.fullName}</Text>
        <Text testID={`repositoryItem-Description-${item.id}`} color="textSecondary" fontSize={"subheading"} >{item.description}</Text>
       <View testID={`repositoryItem-Language-${item.id}`} style={styles.textTag} ><Text  >{item.language}</Text></View>
        </View>
      
      </View>

      <View   style={styles.rowB} >
        <InfoColumn value={item.stargazersCount} text="Stars" id={item.id} />
        <InfoColumn  value={item.forksCount} text="Forks" id={item.id} />
        <InfoColumn  value={item.reviewCount} text="Reviews" id={item.id} />
        <InfoColumn  value={item.ratingAverage} text="Rating" id={item.id} />
        </View>


        
      </View>
    );
};

export default RepositoryItem;