import React from "react";
import { Tab, TabView, Text } from "react-native-elements";
import { View } from "react-native";
import Todo from "../Todo";

const CustomTab = ({ index, setIndex }) => {
  return (
    <View>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item title="Today" />
        <Tab.Item title="Coming" />
        <Tab.Item title="Done" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ width: "95%" }}>
          <View>
            <Todo apa="#4BEED1" />
            <Todo apa="#FBE114" />
            <Todo apa="#13D3FB" />
            <Todo apa="#B6ADFF" />
            <Todo apa="#FB1467" />
          </View>
        </TabView.Item>
        <TabView.Item>
          <Text>Apa</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default CustomTab;
