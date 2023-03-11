import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../Screen/Splash/Splash";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
