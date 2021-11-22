import React from "react";
import { Tab, TabView } from "react-native-elements";

import { View } from "react-native";
import Todo from "./Todo";
import TodoDone from "./TodoDone";
const CustomTab = ({ index, setIndex, navigation }) => {
  return (
    <View>
      <Tab variant="default" value={index} onChange={setIndex}>
        <Tab.Item titleStyle={{ fontFamily: "Poppins-Regular" }} title="Todo" />

        <Tab.Item titleStyle={{ fontFamily: "Poppins-Regular" }} title="Done" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ width: "95%", paddingBottom: 10 }}>
          <View>
            <Todo navigation={navigation} />
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: "95%" }}>
          <View>
            <TodoDone index={index} />
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default CustomTab;
