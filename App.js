import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigator } from "./src/Navigation/AppNavigator.jsx";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView />
      <AppNavigator />
      {/* <Balloons /> */}
    </>
  );
}
