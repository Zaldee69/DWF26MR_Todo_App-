import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Search = ({ setSearch, search }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <View style={open && { paddingBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          paddingBottom: 20,
          width: "99%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Poppins-Regular",
            }}
          >
            Hi Rizaldy!
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 25,
              fontFamily: "Poppins-Medium",
            }}
          >
            Here's Update Today
          </Text>
        </View>

        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View
            style={{ backgroundColor: "#000", padding: 12, borderRadius: 50 }}
          >
            <FontAwesome5 color="#fff" size={20} name={"search"} />
          </View>
        </TouchableOpacity>
      </View>
      {open && (
        <SearchBar
          style={{
            borderRadius: 10,
          }}
          platform="ios"
          placeholder="Search"
          onChangeText={(val) => setSearch(val)}
          value={search}
        />
      )}
    </View>
  );
};

export default Search;
