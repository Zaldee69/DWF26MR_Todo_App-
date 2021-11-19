import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet, View } from "react-native";
// import AddTodo from "./src/AddTodo";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
