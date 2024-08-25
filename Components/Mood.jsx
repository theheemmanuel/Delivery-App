import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Mood = () => {
  return <FlatList data={[]} keyExtractor={(item) => item.id} horizontal />;
};

export default Mood;
