import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomLeftComp = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("home")}>
      <Text>
        <FontAwesome5 size={20} name={"arrow-left"} brand />
      </Text>
    </TouchableOpacity>
  );
};

export default CustomLeftComp;
