import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CustomTodoHeader from "../components/molecules/atom/CustomTodoHeader";
import { Input } from "react-native-elements";
import CustomBtn from "../components/molecules/atom/CustomBtn";
import CustomDeleteBtn from "../components/molecules/atom/CustomDeleteBtn";
import { showMessage } from "react-native-flash-message";
import ColorPicker from "../components/molecules/atom/ColorPicker";

import axios from "axios";

const EditTodo = ({ navigation, route }) => {
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [todo, setTodo] = useState("");

  const { id } = route.params;

  const editTodo = () => {
    axios
      .patch(`https://app-todo-be.herokuapp.com/api/v1/todos/${id}`, {
        todoColor: color,
        date,
        time,
        title: todo,
      })
      .then((response) => {
        // handle success
        showMessage({
          message: "Edit Task Success",
          type: "success",
        });
        route.params.getTodos();
        navigation.push("home");
      })

      .catch((error) => {
        alert(error);
      });
  };
  const deleteTodo = () => {
    axios
      .delete(`https://app-todo-be.herokuapp.com/api/v1/todos/${id}`)
      .then((response) => {
        // handle success
        showMessage({
          message: "Delete Task Success",
          type: "success",
        });
        route.params.getTodos();
        navigation.push("home");
      })

      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View flex={1} style={{ backgroundColor: "#fff", position: "relative" }}>
      <CustomTodoHeader title="Edit Task" navigation={navigation} />
      <View style={{ paddingTop: 30, backgroundColor: "#fff" }}>
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            fontFamily: "Poppins-Light",
            fontSize: 18,
          }}
        >
          My Task
        </Text>
        <Input
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
            fontFamily: "Poppins-Light",
            fontSize: 18,
          }}
        >
          Date
        </Text>
        <Input
          onChangeText={(val) => setDate(val)}
          rightIcon={{ type: "font-awesome", name: "calendar" }}
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
          onChangeText={(val) => setTime(val)}
          rightIcon={{ type: "font-awesome", name: "clock-o" }}
        />
        <Text
          style={{
            paddingLeft: 10,
            color: "#777",
            paddingBottom: 20,
            fontSize: 18,
            fontFamily: "Poppins-Light",
          }}
        >
          Color Task
        </Text>
        <ScrollView>
          <ColorPicker setColor={setColor} />
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 205,
        }}
      >
        <TouchableOpacity onPress={() => deleteTodo()}>
          <CustomDeleteBtn />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => editTodo()}>
          <CustomBtn title="Save" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditTodo;
