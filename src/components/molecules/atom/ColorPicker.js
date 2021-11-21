import React from "react";
import { TouchableOpacity, View } from "react-native";

const ColorPicker = ({ setColor }) => {
  const ColorPicked = (color) => {
    setColor(color);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        paddingBottom: 20,
        marginHorizontal: 10,
      }}
      flex={1}
    >
      <TouchableOpacity onPress={() => ColorPicked("#FBE114")}>
        <View
          style={{
            backgroundColor: "#FBE114",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#4BEED1")}>
        <View
          style={{
            backgroundColor: "#4BEED1",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#13D3FB")}>
        <View
          style={{
            backgroundColor: "#13D3FB",
            width: 25,
            height: 25,

            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#B6ADFF")}>
        <View
          style={{
            backgroundColor: "#B6ADFF",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#FB1467")}>
        <View
          style={{
            backgroundColor: "#FB1467",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#F5815C")}>
        <View
          style={{
            backgroundColor: "#F5815C",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#148CFB")}>
        <View
          style={{
            backgroundColor: "#148CFB",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ColorPicked("#A949C1")}>
        <View
          style={{
            backgroundColor: "#A949C1",
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

export default ColorPicker;
