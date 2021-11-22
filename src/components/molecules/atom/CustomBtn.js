import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomBtn = ({ title }) => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "#000",
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 11,
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          fontFamily: "Poppins-Bold",
        }}
      >
        {`${title}`}
      </Text>
    </View>
  );
};

export default CustomBtn;
