import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../Screen/Splash/Splash";
import ValidNumber from "../Screen/ValidateNumber/ValidNumber";
import OTP from "../Screen/ValidateNumber/OTP";
const AppNavigator = ({}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="Valid" component={ValidNumber}></Stack.Screen>
        <Stack.Screen name="code" component={OTP}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };
