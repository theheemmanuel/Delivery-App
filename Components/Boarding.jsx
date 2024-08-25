import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Onboarding1 from "../Screens/Onboarding1";
import Onboarding2 from "../Screens/Onboarding2";
import { StatusBar } from "expo-status-bar";
import Onboarding3 from "../Screens/Onboarding3";
import Onboarding4 from "../Screens/Onboarding4";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import ForgotPassword from "../Screens/ForgotPassword";
import OTP from "../Screens/OTP";
import ResetPassword from "../Screens/ResetPassword";
import Success from "../Screens/Success";

const Boarding = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
};

export default Boarding;
