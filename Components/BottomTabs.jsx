import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Cart from "./Cart";
import Profile from "../Screens/Profile";
import Shops from "../Screens/Shops";
import Catregory from "../Screens/Catregory";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff9d01",
        tabBarStyle: {
          height: 60,
          marginTop: 2,
          borderBlockColor: "gray",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Icons/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Catregory}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Icons/category.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shops"
        component={Shops}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Icons/shop.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Icons/cart.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Icons/user.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
