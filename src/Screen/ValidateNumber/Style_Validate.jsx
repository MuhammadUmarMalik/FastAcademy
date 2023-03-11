import { colors } from "../../Theme/DesignSystem";
import { StyleSheet, TextInput, View } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Accsent,
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    position: "absolute",
    top: -80,
  },
  boxContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  box: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  mobile: {
    padding: 10,
    borderRadius: 9,
    marginRight: 10,
    backgroundColor: colors.highlight,
  },
  Field: {
    padding: 10,
    width: "70%",
  },
  brtn: {
    width: "60%",
  },
});

export { style };
