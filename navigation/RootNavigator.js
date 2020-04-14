import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import PostDetails from "../components/PostDetails";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator(); 
const {
  Navigator: TabNavigator,
  Screen: TabScreen,
} = createBottomTabNavigator();

const stackNav = () => (
  <StackNavigator
    screenOptions={{
      headerStyle: { backgroundColor: "blueviolet" },
    }}
  >
    <StackScreen
      name="home"
      component={Home}
      options={{
        title: "Posts List",
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    />
    <StackScreen
      name="posts"
      component={Posts}
      options={{
        title: "Posts List",
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <StackScreen
      name="postDetails"
      component={PostDetails}
      options={{
        title: "Post Details",
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    
  </StackNavigator>
);

export default function () {
  return (
    <NavigationContainer>
      <TabNavigator
        tabBarOptions={{
          style: {
            backgroundColor: "blueviolet",
            height: 80,
          },
          labelStyle: {
            fontSize: 16,
          },
          activeTintColor: "white",
        }}
      >
        <TabScreen
          name="Posts"
          component={stackNav}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <TabScreen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" color={color} size={size} />
            ),
          }}
        />
      </TabNavigator>
    </NavigationContainer>
  );
}
