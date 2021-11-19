import React from "react";
import { View, Text } from "react-native";

const RouteBtn = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          backgroundColor: "#000",
          color: "#fff",
          paddingTop: 5,
          paddingBottom: 5,
          textAlign: "center",
          flex: 0.5,
          borderRadius: 50,
          fontWeight: "bold",
        }}
      >
        Today
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#000",
          paddingTop: 3,
          paddingBottom: 3,
          flex: 0.5,
          borderRadius: 50,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Upcoming
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#000",
          paddingTop: 3,
          paddingBottom: 3,
          flex: 0.5,
          borderRadius: 50,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Task Done
      </Text>
    </View>
  );
};

export default RouteBtn;
