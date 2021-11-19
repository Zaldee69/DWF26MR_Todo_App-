import React from "react";
import { View, Text } from "react-native";

const CustomBtn = () => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "#000",
        alignItems: "center",
        position: "absolute",
        bottom: 40,
        left: 20,
        paddingVertical: 11,
        borderRadius: 50,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
        Add Task
      </Text>
    </View>
  );
};

export default CustomBtn;
