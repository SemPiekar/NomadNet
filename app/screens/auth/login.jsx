import { Button, ImageBackground, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../../../components/Logo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          Alert.alert("Success", "Login successful!");
          router.push("../tabs/home");
        } else {
          Alert.alert("Error", "Invalid email or password");
        }
      } else {
        Alert.alert("Error", "No user found. Please register first.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while logging in");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/Login.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="rgba(0,0,0, 0.5)"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(0,0,0, 0.5)"
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupLink} onPress={() => router.push("./register")}> 
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
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
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    marginBottom: 50,
  },
  input: {
    width: 359,
    height: 43,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.83)",
    paddingLeft: 20,
  },
  login: {
    width: 359,
    height: 43,
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
    marginTop: 20,
  },
  signupText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.07,
  },
});
