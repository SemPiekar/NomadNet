import { Button, ImageBackground, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../../../components/Logo";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../../assets/images/Login.png")}
      style={styles.background}
    >
      <Logo />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.email}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        secureTextEntry={true}
        autoCapitalize="none"
        style={styles.password}
      />
      <TouchableOpacity style={styles.login} onPress={() => console.log("Login pressed")}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupLink}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
      <Button title="Back" onPress={() => router.back()} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 580,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
  },
  password: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 640,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
  },
  login: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 700,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 28,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
  },
  signupLink: {
    position: "absolute",
    top: 760, 
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});
