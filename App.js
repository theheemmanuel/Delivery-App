import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import BottomTabs from "./Components/BottomTabs";
import Boarding from "./Components/Boarding";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home1" component={Boarding} /> */}
        <Stack.Screen name="Tabs" component={BottomTabs} />
      </Stack.Navigator>
      <StatusBar style="auto" backgroundColor="white" />
    </NavigationContainer>
  );
}
