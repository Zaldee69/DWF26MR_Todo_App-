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

const Todo = ({ navigation }) => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    setIsLoading(true);
    axios
      .get("https://app-todo-be.herokuapp.com/api/v1/todos")
      .then((response) => {
        // handle success
        setTodos(response.data.todoData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const doneTodo = (id) => {
    const status = {
      status: "done",
    };
    setIsLoading(true);
    axios
      .patch(`https://app-todo-be.herokuapp.com/api/v1/todos/${id}`, status)
      .then((response) => {
        // handle success
        setTodos(response.data.todoData);
        setIsLoading(false);
        getTodos();
      })

      .catch((error) => {
        setIsLoading(false);
      });
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: `${item.todoColor}`,
          marginTop: 30,
          borderRadius: 20,
          paddingBottom: 20,
        }}
        key={item.id.toString()}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>School</Text>
            <Text style={styles.title}>Everyday</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("edit-todo", {
                id: item.id.toString(),
                getTodos,
              })
            }
          >
            <Text>
              <FontAwesome5 size={23} name={"pen-square"} brand />
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
        <View style={styles.container}>
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
                style={{
                  fontFamily: "Poppins-Regular",
                  paddingLeft: 8,
                  color: "#191A1A",
                }}
              >
                {item?.date}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>
                <FontAwesome5 size={16} name={"clock"} brand />
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  paddingLeft: 8,
                  color: "#191A1A",
                }}
              >
                {item?.time}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => doneTodo(item.id)}>
            <FontAwesome5 size={35} name={"circle"} brand />
          </TouchableOpacity>
        </View>
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

export default Todo;
