import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const Settings = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
    </Stack.Navigator>
  );
};

export default Settings;

const styles = StyleSheet.create({});
