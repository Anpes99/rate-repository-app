import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import AppBar from "./src/components/AppBar";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar />
        <Main />
      </View>
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
