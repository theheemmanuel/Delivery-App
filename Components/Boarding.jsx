import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Onboarding1 from "../Screens/Onboarding1";
import Onboarding2 from "../Screens/Onboarding2";
import { StatusBar } from "expo-status-bar";
import Onboarding3 from "../Screens/Onboarding3";
import Onboarding4 from "../Screens/Onboarding4";
import LoginScreen from "../Screens/Login";

const Boarding = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
};

export default Boarding;
