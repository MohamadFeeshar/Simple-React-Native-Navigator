import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";

const Home = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.showPosts} onPress={() => navigation.navigate("posts")}>
        <Text style={{color:"white"}}> Show Posts </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container :{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },
    showPosts: {
        backgroundColor:"darkorchid",
        borderRadius:"10%",
        alignItems:"center",
        justifyContent: "center",
        width:100,
        height:40
    }
});
