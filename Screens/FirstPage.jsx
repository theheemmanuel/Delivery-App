import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const FirstPage = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-zinc-200">
      <Text className="font-bold text-3xl text-orange-600 py-4">
        Welcome to My First React Native App
      </Text>
      <TouchableOpacity
        className="bg-orange-600 py-4 w-1/2 rounded-md"
        onPress={() => navigation.navigate("Tabs", { screen: "Profile" })}
      >
        <Text className="text-center text-xl text-white font-bold">
          Set Up My Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstPage;
