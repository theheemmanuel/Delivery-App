import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="min-h-full">
      <View>
        <Text className="text-xl font-bold text-green-900">Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
