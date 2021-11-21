import React from "react";
import { ScrollView, View } from "react-native";
import CustomHeader from "../components/molecules/CustomHeader";
import CustomTab from "../components/CustomTab";
import CustomFloatButton from "../components/molecules/atom/CustomFloatButton";
import Search from "../components/Search";
import axios from "axios";

const Home = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [search, setSearch] = React.useState("");

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <CustomHeader />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Search search={search} setSearch={setSearch} />
        <CustomTab navigation={navigation} index={index} setIndex={setIndex} />
      </ScrollView>
      {index === 0 && (
        <CustomFloatButton onPress={() => navigation.navigate("add-todo")} />
      )}
    </View>
  );
};

export default Home;
