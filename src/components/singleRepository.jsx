import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY, GET_REVIEWS } from "../graphql/queries";
import { useParams } from "react-router-native";
import { useEffect } from "react/cjs/react.development";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";

const formatTimeString = (time)=>{
    const date = new Date(time)
    return `${date.getUTCDay()+1}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`
}

const styles = StyleSheet.create({
    ReviewItemContainer:{

    },
    ReviewItemRowA:{
        flexDirection:'row',
        marginTop:10

    },
    ReviewItemRowB:{
        flexDirection:'row',
        marginBottom:10
    },
    ReviewItemRowA_colA:{
        width:75,
        justifyContent:'center',
        alignItems:'center'
    },
    ReviewItemRowA_colB:{

    },
    ReviewItemRowB_colA:{
        width:75
    },
    ReviewItemRowB_colB:{
        maxWidth:300
    },
    separator: {
        height: 10,
        backgroundColor:"#F5F5F5"
      },
      ratingCircle:{
          padding:1,
          borderColor:'blue',
          borderStyle:'solid',
          borderWidth:2,
          borderRadius:45/2,
          width:45,
          height:45,
          justifyContent:'center',
          alignItems:'center',
          color:'blue'
          
      },
      ratingText:{
          color:'blue',
          fontWeight:theme.fontWeights.bold
      },
      descriptionText:{
          fontStyle:theme.fonts.main,
          fontWeight:theme.fontWeights.normal,
          fontSize:theme.fontSizes.body
      },
      usernameText:{
        color:theme.colors.textPrimary,
        fontStyle:theme.fonts.main,
        fontWeight:theme.fontWeights.bold,
        fontSize:theme.fontSizes.body
      },
      dateText:{
          color:theme.colors.textSecondary,
          fontStyle:theme.fonts.main,
          fontWeight:theme.fontWeights.normal,
          fontSize:theme.fontSizes.body
      }
})

const RepositoryInfo = ()=>{
    const [getRepository, { data, error, loading }] = useLazyQuery(
      GET_REPOSITORY,
      {
        fetchPolicy: "cache-and-network",
        // Other options
      }
    );
    const itemID = useParams().id;
  
    useEffect(()=>{
      getRepository({variables: {id:itemID}});
    },[]);
  
      const item = loading ? [] : data?.repository;
  
      return(
          <RepositoryItem item={item} singleView={true} />
      );
  
  };
  
const ReviewItem = ({review})=>{
console.log(review)

    return(
<View style={styles.ReviewItemContainer} >
        <View style={styles.ReviewItemRowA} >
            <View style={styles.ReviewItemRowA_colA} >
                <View style={styles.ratingCircle} ><Text style={styles.ratingText} >{review.rating}</Text></View>
            </View>
            <View style={styles.ReviewItemRowA_colB} >
                <Text style={styles.usernameText} >{review.user.username}</Text>
                <Text style={styles.dateText} >{formatTimeString(review.createdAt)}</Text>
            </View>
        </View>
        <View style={styles.ReviewItemRowB} >
        <View style={styles.ReviewItemRowB_colA} ></View>
        <View style={styles.ReviewItemRowB_colB} >
            <Text style={styles.descriptionText} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla autem nemo, inventore repellat porro explicabo assumenda est deleniti, reiciendis voluptatem eum deserunt expedita itaque. Itaque quibusdam at neque libero et?</Text>
        </View>



        </View>
</View>
    )
}

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
    const [getReviews, { data, error, loading }] = useLazyQuery(
        GET_REVIEWS,
        {
          fetchPolicy: "cache-and-network",
          // Other options
        }
      );
      const itemID = useParams().id;
      useEffect(()=>{
        getReviews({variables: {id:itemID}});
      },[]);
    const reviews= loading ? []: data?.repository.reviews.edges.map(edge=> edge.node)
    return (
      <FlatList
        data={reviews}
        renderItem={({ item} ) => <ReviewItem review={item} />}
        keyExtractor={({id}) => id}
        ListHeaderComponent={() => <RepositoryInfo />}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  };
  
  export default SingleRepository;