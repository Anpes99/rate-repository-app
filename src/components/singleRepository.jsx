import React from "react";
import { View,Image, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import { useParams } from "react-router-native";
import { useEffect } from "react/cjs/react.development";
import RepositoryItem from "./RepositoryItem";



export const RepositoryInfo = ()=>{
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
  