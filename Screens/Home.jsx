import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-zinc-800 min-h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <Text className="text-white font-bold text-3xl">Home</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
