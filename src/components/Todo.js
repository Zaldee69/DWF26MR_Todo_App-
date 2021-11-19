import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Todo = ({ apa }) => {
  return (
    <View
      style={{
        backgroundColor: `${apa}`,
        height: 200,
        marginTop: 30,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              borderStyle: "solid",
              borderColor: "#F3F3F3",
              color: "#191A1A",
              textAlign: "center",
              borderWidth: 0.5,
              borderRadius: 50,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 3,
              paddingBottom: 3,
              fontSize: 14,
            }}
          >
            School
          </Text>
          <Text
            style={{
              borderStyle: "solid",
              borderColor: "#F3F3F3",
              color: "#191A1A",
              textAlign: "center",
              borderWidth: 0.5,
              borderRadius: 50,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 3,
              paddingBottom: 3,
              fontSize: 14,
              marginLeft: 8,
            }}
          >
            Everyday
          </Text>
        </View>
        <Text>
          <FontAwesome5 size={23} name={"pen-square"} brand />
        </Text>
      </View>
      <Text
        style={{
          fontSize: 22,
          paddingLeft: 20,
          paddingTop: 20,
          fontWeight: "bold",
          color: "#191A1A",
        }}
      >
        Taking My Sister To School
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <Text>
              <FontAwesome5 size={16} name={"calendar-alt"} brand />
            </Text>
            <Text
              style={{ fontWeight: "700", paddingLeft: 8, color: "#191A1A" }}
            >
              12 October 2021
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>
              <FontAwesome5 size={16} name={"clock"} brand />
            </Text>
            <Text
              style={{ fontWeight: "700", paddingLeft: 8, color: "#191A1A" }}
            >
              07 : 30
            </Text>
          </View>
        </View>
        <FontAwesome5 size={35} name={"circle"} brand />
      </View>
    </View>
  );
};

export default Todo;
