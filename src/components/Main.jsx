import React from "react";
import { View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import RepositoryList from "./RepositoryList";
import { repositories } from "../utils/data";
import SignIn from "./SignIn";

const Main = ()=>{


    return(
        <View style={{flexDirection:'row'}} >
            
            <Switch>
        <Route path="/login" >
        <SignIn/>
        </Route>
        <Route path="/" exact>
        <RepositoryList repositories={repositories} />		
        </Route>
        <Redirect to="/" />
      </Switch>
        </View>
    );
};

export default Main;