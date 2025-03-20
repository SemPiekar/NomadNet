import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View
      style={{
        position: "absolute",
        width: 167,
        height: 55,
        left: 21,
        top: 62,
      }}
    >
      <Image source={require("../assets/images/Logo.png")}></Image>
    </View>
  );
}
