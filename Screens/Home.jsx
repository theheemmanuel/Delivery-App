import {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Mood from "../Components/Mood";

const Home = () => {
  return (
    <SafeAreaView className="mt-6 px-6 bg-white min-h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <View className="justify-between flex-row items-start">
              <Image source={require("../assets/Icons/bell.png")} />
              <View>
                <View className="flex-row items-center gap-2 justify-center">
                  <Image source={require("../assets/Icons/map-pin.png")} />
                  <Text className="font-bold text-2xl">Home</Text>
                </View>
                <Text>9, suramya duples, nr nigram bus stand...</Text>
              </View>
              <Image source={require("../assets/Icons/heart.png")} />
            </View>
            <View className="justify-between flex-row items-center gap-4 my-3">
              <View className="flex-row items-center justify-between flex-1  p-2 rounded-md bg-gray-100">
                <Image source={require("../assets/Icons/search.png")} />
                <TextInput
                  className="flex-1 px-2 font-semibold text-[18px]"
                  placeholder="Name ur mind..."
                  placeholderTextColor="#bfbfbf"
                />
                <Image source={require("../assets/Icons/Vector.png")} />
              </View>
              <View className="rounded-md p-2 bg-gray-100">
                <Image source={require("../assets/Icons/slider.png")} />
              </View>
            </View>
            <View className="relative">
              <Image
                source={require("../assets/Images/indian-condiments-with-copy-space-view 1.png")}
                resizeMode="cover"
                className="w-full"
              />
              <View className="absolute left-2 bottom-2">
                <Text className="font-bold text-white text-2xl">
                  Get your first order at
                </Text>
                <Text className="text-[#ff9d01] font-bold text-4xl">
                  60% off
                </Text>
              </View>
              <Text className="absolute text-white right-2 bottom-2 font-semibold text-lg">
                *Only available for new foodies
              </Text>
            </View>
            <View className="my-6 justify-between items-center flex-row">
              <Text className="text-2xl font-bold">
                What's your mood today?
              </Text>
              <TouchableOpacity>
                <Text className="text-[#ff9d01] font-semibold text-xl">
                  view all
                </Text>
              </TouchableOpacity>
            </View>
            <Mood />
            <View className="my-6 justify-between items-center flex-row">
              <Text className="text-2xl font-bold">
                Popular moods you can get{" "}
              </Text>
              <TouchableOpacity>
                <Text className="text-[#ff9d01] font-semibold text-xl">
                  view all
                </Text>
              </TouchableOpacity>
            </View>
            <Mood />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
