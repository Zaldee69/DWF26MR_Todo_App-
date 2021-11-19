import React from "react";
import { View, Text } from "react-native";

import ColorPicker from "react-native-wheel-color-picker";

const Picker = (props) => {
  const setColorPicked = (color) => {
    props.setColor(color);
  };
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderBottomColor: "#777",
        borderBottomWidth: 1,
        paddingBottom: 20,
      }}
    >
      <ColorPicker
        swatchesOnly={true}
        onColorChange={(color) => setColorPicked(color)}
      />
    </View>
  );
};

export default Picker;
