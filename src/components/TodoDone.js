import React from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { showMessage } from "react-native-flash-message";

const TodoDone = ({ index }) => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getTodos();
  }, [index]);

  const getTodos = () => {
    setIsLoading(true);
    axios
      .get("http://192.168.1.14:4000/api/v1/todos/done")
      .then((response) => {
        // handle success
        setTodos(response.data.todoData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://192.168.1.14:4000/api/v1/todos/${id}`)
      .then((response) => {
        // handle success
        showMessage({
          message: "Delete Task Success",
          type: "success",
        });
        getTodos();
      })

      .catch((error) => {
        alert(error);
      });
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: `${item.todoColor}`,
          height: 150,
          marginTop: 30,
          borderRadius: 20,
        }}
        key={item.id.toString()}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>School</Text>
            <Text style={styles.title}>Everyday</Text>
          </View>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Text>
              <FontAwesome5 size={23} name={"trash-alt"} brand />
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 20,
            paddingTop: 20,
            fontFamily: "Poppins-Medium",
            color: "#191A1A",
          }}
        >
          {item?.title}
        </Text>
        <TouchableOpacity style={{ alignItems: "flex-end", paddingRight: 15 }}>
          <FontAwesome5 color="#000" size={35} name={"check-circle"} brand />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={todos}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      refreshing={isLoading}
      onRefresh={getTodos}
      nestedScrollEnabled
    />
  );
};

const styles = StyleSheet.create({
  title: {
    borderWidth: 0.5,
    borderStyle: "solid",
    color: "#000",
    textAlign: "center",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 14,
    marginRight: 8,
    fontFamily: "Poppins-Light",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default TodoDone;
