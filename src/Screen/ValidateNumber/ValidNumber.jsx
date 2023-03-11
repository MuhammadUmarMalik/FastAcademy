import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { colors } from "../../Theme/DesignSystem";
import { style } from "./Style_Validate";
import { Button } from "../../Component/Button";

const Validate = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <FontAwesome name="users" size={50} color="white" style={style.user} />
        <View style={style.boxContainer}>
          <FontAwesome
            name="mobile"
            size={40}
            color={colors.Accsent}
            backgroundColor={colors.dark}
            style={style.mobile}
          />
          <TextInput
            title="NumberFormat"
            placeholder={"NumberFormat 0300xxxxxx"}
            style={style.Field}
          />
        </View>
      </View>
      <Button
        primary
        title={"Submit"}
        onPress={() => {
          navigation.navigate("code");
        }}
        style={style.btn}
      />
    </View>
  );
};

export default Validate;
