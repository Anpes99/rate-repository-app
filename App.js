import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import AppBar from "./src/components/AppBar";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <AppBar />
          <Main />
        </View>
      </ApolloProvider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});

export default App;
