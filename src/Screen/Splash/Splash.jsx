import { View, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { style } from "./Style_Splash";
import Logo from "../../Assets/Logo.png";

const Splash = () => {
  return (
    <View style={style.container}>
      <Image source={Logo} style={style.logo} />
      <Button title="signup" />
      <Button title="signin" />
    </View>
  );
};

export default Splash;
