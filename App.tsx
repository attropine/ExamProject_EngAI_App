import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./navigation/BottomTabs";
import TopicsScreen from "./src/screens/TopicsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Tabs" component={BottomTabs} />

        <Stack.Screen
  name="Topic"
  component={TopicsScreen}
  options={{
    headerShown: true,
    headerTitle: '',
    headerTransparent: true,
    headerTintColor: '#fff'
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
