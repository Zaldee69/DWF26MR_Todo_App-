import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Search = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        paddingBottom: 20,
        width: "99%",
      }}
    >
      <View>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Wellcome Back!</Text>
        <Text style={{ paddingTop: 10, fontSize: 25, fontWeight: "700" }}>
          Here's Update Today
        </Text>
      </View>
      <View style={{ backgroundColor: "#000", padding: 12, borderRadius: 50 }}>
        <FontAwesome5 color="#fff" size={20} name={"search"} />
      </View>
    </View>
  );
};

export default Search;
