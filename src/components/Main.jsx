import React from "react";
import { View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";

const Main = ()=>{


    return(
        <View style={{flexDirection:'row'}} >
            
            <Switch>
        <Route path="/item/:id" >
        <SingleRepository singleView={true} />
        </Route>
        <Route path="/login" >
        <SignIn/>
        </Route>
        <Route path="/" exact>
        <RepositoryList  />		
        </Route>
        <Redirect to="/" />
      </Switch>
        </View>
    );
};

export default Main;