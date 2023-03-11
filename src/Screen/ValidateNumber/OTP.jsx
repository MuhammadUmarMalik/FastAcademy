import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import { colors } from "../../Theme/DesignSystem";
import { style } from "./Style_Validate";
import { Button } from "../../Component/Button";

const OTP = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <FontAwesome name="users" size={50} color="white" style={style.user} />
        <View style={style.boxContainer}>
          <MaterialCommunityIcons
            name="two-factor-authentication"
            size={40}
            color="black"
            style={style.mobile}
          />

          <TextInput
            title="NumberFormat"
            placeholder={"Enter your OTP "}
            style={style.Field}
          />
        </View>
      </View>
      <Button
        primary
        title={"Submit"}
        onPress={() => {
          alert("hello");
        }}
        style={style.btn}
      />
    </View>
  );
};

export default OTP;
