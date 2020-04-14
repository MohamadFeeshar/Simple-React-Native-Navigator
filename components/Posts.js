import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("postDetails", { postId: item.id })
              }
            >
              <Image
                style={{ width: 400, height: 400 }}
                source={{
                  uri: `https://source.unsplash.com/random`,
                }}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
