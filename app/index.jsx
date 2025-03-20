import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/Logo";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/WelcomeScreen.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Logo />
      <Text
        style={{
          fontSize: 45,
          position: "absolute",
          width: 312,
          height: 182,
          left: 22,
          top: 437,
          fontWeight: 400,
          lineHeight: 55,
          color: "#FFF",
        }}
      >
        Explore a new world with us
      </Text>
      <View
        style={{
          position: "absolute",
          width: 359,
          height: 43,
          justifyContent: "center",
          top: 690,
        }}
      >
        <Button
          color="#000"
          title="Log In"
          onPress={() => router.push("/screens/auth/login")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          width: 359,
          height: 43,
          justifyContent: "center",
          top: 750,
        }}
      >
        <Button
          color="#000"
          title="Register"
          onPress={() => router.push("/screens/auth/register")}
        />
      </View>
      <Button
        color="#000"
        title="To the app"
        onPress={() => router.push("/screens/tabs/home")}
      />
    </ImageBackground>
  );
}
