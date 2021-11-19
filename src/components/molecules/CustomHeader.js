import React from "react";
import { Header } from "react-native-elements";
import CustomRightComp from "./atom/CustomRightComp";

const CustomHeader = () => {
  return (
    <Header
      backgroundColor="#fff"
      leftComponent={{
        icon: "menu",
        color: "#000",
        iconStyle: { color: "#000" },
        size: 25,
      }}
      centerComponent={{
        text: "Task Manager",
        style: { color: "#000", fontSize: 20, fontWeight: "bold" },
      }}
      rightComponent={<CustomRightComp />}
    />
  );
};

export default CustomHeader;
