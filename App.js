import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Navigation from "./src/Navigation/Index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
