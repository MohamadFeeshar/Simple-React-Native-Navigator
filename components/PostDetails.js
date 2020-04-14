import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

const PostDetails = ({ route }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, fontWeight:"500"}}>{post.title}</Text>
      <Image
        style={{ width: 400, height: 400 }}
        source={{ uri: `https://source.unsplash.com/random` }}
      />
      <View>
        <Text style={{fontSize:20, fontWeight:"200"}}>{post.body}</Text>
      </View>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
