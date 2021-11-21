import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddTodo from "../screens/AddTodo";
import EditTodo from "../screens/EditTodo";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="add-todo" component={AddTodo} />
        <Stack.Screen name="edit-todo" component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
