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

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-center gap-20 px-6 max-h-[90vh]">
      <View className="flex-col gap-y-6">
        <View className="items-center p-4">
          <Image
            resizeMode="contain"
            tintColor="#ff9d01"
            className="h-36"
            source={require("../assets/Images/Logo.png")}
          />
        </View>
        <Text className="text-[#ff9d01] font-bold text-[26px] text-center mb-8">
          Forgot Password
        </Text>
        <Text className="text-center font-semibold text-xl">
          Don’t worry! It happens. Please enter the address associated with your
          account.
        </Text>

        <View>
          <TextInput
            className="w-full px-2 py-4 font-semibold text-[18px] rounded-xl bg-[#dadada] my-2"
            placeholder="Email Address"
          />
        </View>
        <TouchableOpacity
          className="bg-[#ff9d01] mt-8 py-4 rounded-lg"
          onPress={() => navigation.navigate("OTP")}
        >
          <Text className="text-[20px] text-white text-center font-bold rounded-xl">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
