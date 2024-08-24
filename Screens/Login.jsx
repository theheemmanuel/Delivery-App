import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-center gap-20 px-6 max-h-[90vh]">
      <View>
        <Text className="text-[#ff9d01] font-bold text-[26px] text-center mb-8">
          Sign In
        </Text>
        <View>
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Name"
          />
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Email Address"
          />
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Phone Number"
          />
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          className="bg-[#ff9d01] mt-8 py-4 rounded-lg"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-[20px] text-white text-center font-bold rounded-xl">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account?</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
