import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";

const SButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SButton;

const styles = StyleSheet.create({});
