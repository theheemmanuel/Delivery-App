import { StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>LoginScreen</Text>
        <Button
          title="Sign Up here now"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
