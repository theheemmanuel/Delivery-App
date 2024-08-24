import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding4 = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center gap-12 px-6 my-4">
      <View>
        <Image
          className="h-[300px] w-[300px] mt-8"
          source={require("../assets/Images/bro4.png")}
          resizeMode="contain"
        />
      </View>
      <Text className="text-[#ff9d01] font-bold text-[26px]">
        All your favourites restaurants
      </Text>
      <Text className="text-[#161616] font-bold text-[18px] text-center w-3/4">
        Want a food for your mood? Get your tummies filled with the edible good
      </Text>
      <TouchableOpacity
        className="bg-[#ff9d01] w-3/4 py-4 rounded-lg"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-[20px] text-white text-center font-bold rounded-xl">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding4;
