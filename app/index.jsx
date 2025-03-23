import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/Logo";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/WelcomeScreen.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Explore a new world with us</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonWrapper, styles.registerButton]}
            onPress={() => router.push("/screens/auth/register")}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonWrapper, styles.loginButton]}
            onPress={() => router.push("/screens/auth/login")}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 3,
    lineHeight: 55,
    color: "#FFF",
    marginTop: 400,
    marginRight: 50,
    width: 300,
    textAlign: "left"
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    marginBottom: 50,
  },
  buttonWrapper: {
    width: 359,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#000",
  },
  registerButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});