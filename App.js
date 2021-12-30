import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./src/components/RepositoryList";
import { repositories } from "./src/utils/data";

export default function App() {
  return (
    <View style={styles.container}>
      <RepositoryList repositories={repositories} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
