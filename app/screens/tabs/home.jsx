import { Text, View, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("../../../assets/images/Home.png")}
            style={styles.image}
          />
          <Text style={styles.title}>My Trips</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      justifyContent: "space-between",
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    title: {
      fontWeight: "700",
      fontSize: 30,
      lineHeight: 55,
    },
});