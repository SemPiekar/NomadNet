import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

export default function Back() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => router.push("/screens/tabs/home")}>
        <Ionicons name="close-outline" size={40} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
