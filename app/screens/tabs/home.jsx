import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{}}>
      <Text style={styles.title}>🏖️ My Trips</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: 66,
    left: 22,
    width: 184,
    height: 55,
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 55,
    letterSpacing: 0.5,
  }
});