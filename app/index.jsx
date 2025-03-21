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
      <Button color="#000" title="To the app" onPress={() => router.push("/screens/tabs/home")} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    position: "absolute",
    width: 312,
    height: 182,
    left: 22,
    top: 437,
    fontWeight: "400",
    lineHeight: 55,
    color: "#FFF",
  },
  buttonContainer: {
    position: "absolute",
    top: 650, 
    alignItems: "center",
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
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#000",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});
