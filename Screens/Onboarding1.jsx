import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center gap-12 px-6 my-4">
      <View className="justify-end flex-row w-full px-6">
        {/* <TouchableOpacity>
          <Text className="text-16px bg-[#ff9d01] text-white font-bold px-4 py-2 rounded-xl">
            &larr; Previous
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("Onboarding2")}>
          <Text className="text-[20px] bg-[#ff9d01] text-white font-bold px-4 py-2 rounded-xl">
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          className="h-[300px] w-[300px] mt-8"
          source={require("../assets/Images/bro.png")}
          resizeMode="cover"
        />
      </View>
      <Text className="text-[#ff9d01] font-bold text-[26px] my-4">
        All your favourites restaurants
      </Text>
      <Text className="text-[#161616] font-bold text-[18px] text-center w-3/4">
        Order from the best local restaurants with ease and on-demand delivery
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding1;
