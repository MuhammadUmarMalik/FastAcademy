import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { colors } from "../Theme/DesignSystem";

/***
 *
 * primary : ( full bg  , with primary color, no border)
 * outline : ( no bg, border with primary, border 1 )
 */
function Button({ primary, outline, title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        primary === true
          ? styles.primaryButton
          : outline === true
          ? styles.outlineButton
          : styles.primaryButton
      }
    >
      <Text
        style={
          primary
            ? styles.btnText
            : outline
            ? styles.outlineText
            : styles.btnText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const base = {
  backgroundColor: colors.Secondary,
  borderRadius: 10,
  width: "80%",
  padding: 15,
  alignItems: "center",
  marginVertical: 15,
};

const styles = StyleSheet.create({
  primaryButton: {
    ...base,
  },
  btnText: {
    color: colors.Accsent,
  },
  outlineButton: {
    ...base,
    backgroundColor: colors.dark,
  },
  outlineText: {
    color: colors.primary,
  },
});

export { Button };
