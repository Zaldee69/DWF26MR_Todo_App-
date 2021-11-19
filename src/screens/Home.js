import React from "react";
import { ScrollView, View } from "react-native";
import Search from "../components/Search";
import CustomHeader from "../components/molecules/CustomHeader";
import CustomTab from "../components/molecules/CustomTab";
import CustomFloatButton from "../components/molecules/atom/CustomFloatButton";

const Home = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <CustomHeader />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Search />
        <CustomTab index={index} setIndex={setIndex} />
      </ScrollView>
      {index === 0 && (
        <CustomFloatButton onPress={() => navigation.navigate("add-todo")} />
      )}
    </View>
  );
};

export default Home;
