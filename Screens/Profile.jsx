import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-white min-h-full px-4">
      <View className="flex-row-reverse items-center justify-between gap-6 py-4">
        <View className="bg-black h-[1px] flex-1"></View>
        <Text className="text-2xl text-green-900">Personal Information</Text>
        <Image source={require("../assets/Images/Vector.png")} />
      </View>
      <View className="relative justify-center items-center py-6">
        <Image source={require("../assets/Images/Group 40.png")} />
        <View className="bg-[#ff9d01] rounded-full p-2 absolute bottom-4">
          <Image source={require("../assets/Images/Camera 1.png")} />
        </View>
      </View>
      <View>
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
