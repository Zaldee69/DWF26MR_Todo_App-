import React from "react";
import { Text } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomRightComp = () => {
  return (
    <Text>
      <FontAwesome5 size={23} name={"bell"} brand />
    </Text>
  );
};

export default CustomRightComp;
