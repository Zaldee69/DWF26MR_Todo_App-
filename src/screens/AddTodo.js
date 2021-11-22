import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import CustomBtn from "../components/molecules/atom/CustomBtn";
import CustomTodoHeader from "../components/molecules/atom/CustomTodoHeader";
import axios from "axios";
import { showMessage } from "react-native-flash-message";
import ColorPicker from "../components/molecules/atom/ColorPicker";

const AddTodo = ({ navigation }) => {
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [todo, setTodo] = useState("");

  const postNewTodo = () => {
    if (!color || !date || !time || !todo === "") {
      showMessage({
        message: "Please fill all form",
        type: "danger",
      });
    } else {
      axios
        .post("http://192.168.1.14:4000/api/v1/todos", {
          title: todo,
          date,
          time,
          todoColor: color,
        })
        .then((response) => {
          // handle success
          setColor("");
          setDate("");
          setTime("");
          setTodo("");
          showMessage({
            message: "Add Task Success",
            type: "success",
          });

          navigation.push("home");
        })
        .catch((error) => {
          showMessage({
            message: "Cannot add Task",
            type: "danger",
          });
        });
    }
  };

  return (
    <View flex={1} style={{ backgroundColor: "#fff", position: "relative" }}>
      <CustomTodoHeader title="Add Task" navigation={navigation} />
      <View style={{ paddingTop: 30, backgroundColor: "#fff" }}>
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            fontSize: 18,
            fontFamily: "Poppins-Light",
          }}
        >
          New Task
        </Text>
        <Input
          value={todo}
          onChangeText={(val) => setTodo(val)}
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
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            fontSize: 18,
            fontFamily: "Poppins-Light",
          }}
        >
          Date
        </Text>

        <Input
          onChangeText={(val) => setDate(val)}
          rightIcon={{ type: "font-awesome", name: "calendar" }}
          onPress={() => setOpen(true)}
        />
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            fontFamily: "Poppins-Light",
            fontSize: 18,
          }}
        >
          Remind At
        </Text>
        <Input
          value={time}
          onChangeText={(val) => setTime(val)}
          rightIcon={{ type: "font-awesome", name: "clock-o" }}
        />
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            paddingBottom: 20,
            fontFamily: "Poppins-Light",
            fontSize: 18,
          }}
        >
          Color Task
        </Text>
        <ScrollView>
          <ColorPicker setColor={setColor} />
        </ScrollView>
      </View>
      <View style={{ marginTop: 250 }}>
        <TouchableOpacity onPress={() => postNewTodo()}>
          <CustomBtn title="Add Task" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;
