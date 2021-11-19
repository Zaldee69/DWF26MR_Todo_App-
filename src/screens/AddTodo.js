import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { View } from "react-native";
import { FAB } from "react-native-elements";

const AddTodo = () => {
  return (
    <View>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{ text: "Halo", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <FAB title="Create" />
    </View>
  );
};

export default AddTodo;
