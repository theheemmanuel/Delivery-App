import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const Cart = () => {
  const Stack = createNativeStackNavigator();
  return <SafeAreaView></SafeAreaView>;
};

export default Cart;

const styles = StyleSheet.create({});
