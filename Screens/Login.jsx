import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-center gap-20 px-6 max-h-[90vh]">
      <View>
        <View className="items-center p-4">
          <Image
            resizeMode="contain"
            tintColor="#ff9d01"
            className="h-36"
            source={require("../assets/Images/Logo.png")}
          />
        </View>
        <Text className="text-[#ff9d01] font-bold text-[26px] text-center mb-8">
          Sign In
        </Text>
        <View>
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Email Address"
          />
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Password"
          />
          <TouchableOpacity
            className="items-end p-2"
            onPress={() => navigation.navigate("Forgot")}
          >
            <Text className="font-semibold text-lg text-[#ff9d01]">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="bg-[#ff9d01] mt-8 py-4 rounded-lg"
          // onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-[20px] text-white text-center font-bold rounded-xl">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View className="justify-center items-center flex-row">
        <Text className="font-semibold text-lg">Don't have an account?</Text>
        <TouchableOpacity
          className="p-2"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text className="font-semibold text-lg text-[#ff9d01]">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
