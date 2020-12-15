import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimationList } from "./src/AnimationList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        アニメーションサンプル　 - (SDK 40 + Reanimated)
      </Text>
      <AnimationList style={{ marginTop: 80 }} />
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
  title: {
    width: "80%",
    fontSize: 24,
    marginBottom: 12,
    alignItems: "center",
    alignSelf: "center",
  },
});
