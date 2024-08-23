import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>SignUp</Text>
        <Button
          title="Login here now"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});