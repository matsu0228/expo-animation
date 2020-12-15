import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimationList } from "./src/AnimationList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>アニメーションサンプル(SDK40)</Text>
      <AnimationList />
      <StatusBar style="auto" />
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
  title: { fontSize: 24, marginBottom: 12 },
});
