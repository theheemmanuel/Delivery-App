import { FlatList, View, Image, Text } from "react-native";
import React from "react";

const Popular = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className="mr-4 mb-4 bg-[#f8c87b]">
          <View className="w-[300px] h-[300px] p-6 relative">
            <Image
              source={item.source}
              className="w-full h-3/4"
              resizeMode="contain"
            />
            <Text className="text-black text-2xl font-bold absolute bottom-7 left-[20%] z-10">
              {item.title}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default Popular;
