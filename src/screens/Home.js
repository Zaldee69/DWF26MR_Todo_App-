import React from "react";
import { ScrollView, View } from "react-native";
import Search from "../components/Search";
import CustomHeader from "../components/molecules/CustomHeader";
import CustomTab from "../components/molecules/CustomTab";
import CustomFloatButton from "../components/molecules/atom/CustomFloatButton";

const Home = () => {
  const [index, setIndex] = React.useState();
  console.log(index);
  return (
    <View>
      <View flex={1}>
        <CustomHeader />
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Search />
          <CustomTab index={index} setIndex={setIndex} />
        </ScrollView>
      </View>
      {index === 0 && <CustomFloatButton />}
    </View>
  );
};

export default Home;
