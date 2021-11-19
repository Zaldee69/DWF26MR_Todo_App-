import React from "react";
import { Header } from "react-native-elements";
import CustomLeftComp from "./CustomLeftComp";

const CustomTodoHeader = ({ navigation, title }) => {
  return (
    <Header
      backgroundColor="#fff"
      centerComponent={{
        text: ` ${title} `,
        style: { color: "#000", fontSize: 20, fontWeight: "bold" },
      }}
      leftComponent={<CustomLeftComp navigation={navigation} />}
    />
  );
};

export default CustomTodoHeader;
