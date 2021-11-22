import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomDeleteBtn = () => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: "red",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 5,

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
        Delete
      </Text>
    </View>
  );
};

export default CustomDeleteBtn;
