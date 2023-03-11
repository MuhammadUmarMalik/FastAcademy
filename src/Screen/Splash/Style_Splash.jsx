import { StyleSheet } from "react-native";
import { colors, typography } from "../../Theme/DesignSystem";
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: "21%",
  },
});

export { style };
