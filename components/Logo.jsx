import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image 
        source={require("../assets/images/Logo.png")} 
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    width: 167, 
    height: 55,  
    left: 21,
    top: 62,
  },
  logo: {
    width: 167,  
    height: 55,  
    resizeMode: "contain",
  },
});
