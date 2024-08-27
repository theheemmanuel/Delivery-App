import { Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Success = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-center gap-20 px-6 max-h-[90vh]">
      <View className="flex-col gap-y-6">
        <View className="items-center p-4">
          <Image
            resizeMode="contain"
            className="h-[300px] w-[300px] mt-8"
            source={require("../assets/Images/successbro.png")}
          />
        </View>
        <Text className="text-[#ff9d01] font-bold text-[26px] text-center mb-8 my-4">
          Success
        </Text>
        <View>
          <Text className="text-center font-semibold text-xl">
            Your password has been reset successfully.
          </Text>
          <Text className="text-center my-2 text-xl">
            Don't forget the password again! 😃
          </Text>
        </View>
        <TouchableOpacity
          className="bg-[#ff9d01] mt-8 py-4 rounded-lg"
          onPress={() => navigation.navigate("Tabs", { screen: "Home" })}
        >
          <Text className="text-[20px] text-white text-center font-bold rounded-xl">
            Go Moody Again
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Success;
