import React, { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import CustomTodoHeader from "../components/molecules/atom/CustomTodoHeader";
import { Input } from "react-native-elements";
import ColorPicker from "../components/molecules/atom/ColorPicker";
import CustomBtn from "../components/molecules/atom/CustomBtn";

const AddTodo = ({ navigation }) => {
  const [color, setColor] = useState("");
  return (
    <View flex={1} style={{ backgroundColor: "#fff", position: "relative" }}>
      <CustomTodoHeader title="Add task" navigation={navigation} />
      <View style={{ paddingTop: 30, backgroundColor: "#fff" }}>
        <Text style={{ paddingLeft: 10, color: "#777", fontSize: 16 }}>
          My New task
        </Text>
        <Input
          rightIcon={
            color === "" ? (
              { type: "font-awesome", name: "pencil" }
            ) : (
              <View
                style={{
                  backgroundColor: `${color}`,
                  padding: 10,
                  borderRadius: 50,
                }}
              ></View>
            )
          }
        />
        <Text style={{ paddingLeft: 10, color: "#777", fontSize: 16 }}>
          Deadline
        </Text>
        <Input rightIcon={{ type: "font-awesome", name: "calendar" }} />
        <Text style={{ paddingLeft: 10, color: "#777", fontSize: 16 }}>
          Remind At
        </Text>
        <Input rightIcon={{ type: "font-awesome", name: "clock-o" }} />
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            paddingBottom: 20,
            fontSize: 17,
          }}
        >
          Color task
        </Text>
        <ScrollView>
          <ColorPicker setColor={setColor} />
        </ScrollView>
      </View>
      <CustomBtn />
    </View>
  );
};

export default AddTodo;
