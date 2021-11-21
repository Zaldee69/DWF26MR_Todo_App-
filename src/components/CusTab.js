import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Todo from "./Todo";
import TodoDone from "./TodoDone";
const Tab = createBottomTabNavigator();

const CusTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="todo" component={Todo} />
      <Tab.Screen name="done-todo" component={TodoDone} />
    </Tab.Navigator>
  );
};

export default CusTab;
