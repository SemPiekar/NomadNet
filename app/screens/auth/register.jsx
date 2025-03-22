import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../../../components/Logo";

const registerUser = async (email, password, confirmPassword) => {
  email = email.trim();
  password = password.trim();
  confirmPassword = confirmPassword.trim();

  if (!email || !password || !confirmPassword) {
    return { success: false, message: "All fields are required!" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Enter a valid email address!" };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters!",
    };
  }

  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match!" };
  }

  try {
    const existingUser = await AsyncStorage.getItem("user");
    if (existingUser) {
      return { success: false, message: "User already exists!" };
    }

    const user = { email, password };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return { success: true, message: "User registered successfully!" };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, message: "Registration failed!" };
  }
};

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    const result = await registerUser(email, password, confirmPassword);
    Alert.alert(result.success ? "Success" : "Error", result.message);
    if (result.success) {
      router.push("./login");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/Register.png")}
      style={styles.background}
    >
      <Logo />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.email}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        secureTextEntry
        autoCapitalize="none"
        style={styles.password}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        secureTextEntry
        autoCapitalize="none"
        style={styles.confirmPassword}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.login} onPress={handleRegister}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupLink} onPress={() => router.push("./login")}>
        <Text style={styles.signupText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
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
    top: 530,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
  },
  password: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 590,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
  },
  confirmPassword: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 650,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
    
  },
  login: {
    position: "absolute",
    width: 359,
    height: 43,
    top: 710,
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
    top: 770,
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});
