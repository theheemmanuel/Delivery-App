import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboardin2 = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center gap-12 px-6 my-4">
      <View className="justify-between flex-row w-full px-6">
        <TouchableOpacity onPress={() => navigation.navigate("Onboarding1")}>
          <Text className="text-[20px] bg-[#ff9d01] text-white font-bold px-4 py-2 rounded-xl">
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Onboarding3")}>
          <Text className="text-[20px] bg-[#ff9d01] text-white font-bold px-4 py-2 rounded-xl">
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          className="h-[300px] w-[300px] mt-8"
          source={require("../assets/Images/bro2.png")}
          resizeMode="cover"
        />
      </View>
      <Text className="text-[#ff9d01] font-bold text-[26px] my-4">
        Unmatched Reliability
      </Text>
      <Text className="text-[#161616] font-bold text-[18px] text-center w-3/4">
        Experience peace of mind while tracking your order in real time
      </Text>
    </SafeAreaView>
  );
};

export default Onboardin2;
