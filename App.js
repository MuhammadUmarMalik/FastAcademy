import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigator } from "./src/Navigation/AppNavigator.jsx";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView />
      <AppNavigator />
    </>
  );
}
