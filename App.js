import React from "react";
import Navigation from "./src/navigations/Navigation";
import FlashMessage from "react-native-flash-message";
import { View } from "react-native";

export default function App() {
  return (
    <View flex={1}>
      <Navigation />
      <FlashMessage
        style={{
          position: "absolute",
          top: 50,
          width: "70%",
          alignItems: "center",
          paddingVertical: 10,
        }}
        titleStyle={{ fontSize: 18, lineHeight: 50, textAlign: "center" }}
        position="center"
        useRef="myLocalFlashMessage"
        icon="auto"
        duration={500}
      />
    </View>
  );
}
