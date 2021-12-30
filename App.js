import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./src/components/RepositoryList";
import { repositories } from "./src/utils/data";
import Main from "./src/components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <RepositoryList repositories={repositories} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
