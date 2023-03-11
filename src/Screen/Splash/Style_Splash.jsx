import { StyleSheet } from "react-native";
import color from "../../Theme/DesignSystem";
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
});

export { style };
