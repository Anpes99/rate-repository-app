import React from "react";
import { View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import { RepositoryInfo } from "./singleRepository";

const Main = ()=>{


    return(
        <View style={{flexDirection:'row'}} >
            
            <Switch>
        <Route path="/item/:id" >
        <RepositoryInfo singleView={true} />
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