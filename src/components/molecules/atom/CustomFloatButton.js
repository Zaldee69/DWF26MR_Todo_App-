import React from "react";
import { FAB } from "react-native-elements";

const CustomFloatButton = ({ onPress }) => {
  return (
    <FAB
      style={{ marginBottom: 20, marginLeft: 125 }}
      onPress={() => onPress()}
      placement="left"
      visible={true}
      title="Add Task"
      color="#000"
      icon={{
        name: "plus",
        type: "font-awesome",
        color: "#fff",
      }}
    />
  );
};

export default CustomFloatButton;
