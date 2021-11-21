import React from "react";
import { View, Text } from "react-native";
import { Header, Badge } from "react-native-elements";
import CustomRightComp from "./atom/CustomRightComp";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomHeader = () => {
  const CustomLeftComp = () => {
    return (
      <Text>
        <FontAwesome5 size={23} name={"bars"} brand />
      </Text>
    );
  };
  return (
    <View>
      <Header
        backgroundColor="#fff"
        leftComponent={<CustomLeftComp />}
        centerComponent={{
          text: "Task Manager",
          style: { color: "#000", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={<CustomRightComp />}
      />
      <Badge
        status="error"
        badgeStyle={{ top: -32, left: 184, width: 10, height: 10 }}
      />
    </View>
  );
};

export default CustomHeader;
