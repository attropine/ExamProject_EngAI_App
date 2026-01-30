import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainScreen from "../src/screens/MainScreen";
import HomeScreen from "../src/screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1A1525",
          borderTopColor: "#5C3D7D",
          height: 60,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "#9D7BC9",
        tabBarInactiveTintColor: "#9E8BB5",
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";

          if (route.name === "Головна") iconName = "home-outline";
          if (route.name === "Теми") iconName = "list-outline";

          return <Ionicons name={iconName as any} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Головна" component={MainScreen} />
      <Tab.Screen name="Теми" component={HomeScreen} />
    </Tab.Navigator>
  );
}