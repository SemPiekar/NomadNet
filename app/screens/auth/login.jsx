import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../../../components/Logo";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../../assets/images/Login.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Logo />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          position: "absolute",
          width: 359,
          height: 43,
          top: 635,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
          borderRadius: 28,
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.83)",
          paddingLeft: 20,
        }}
      ></TextInput>
      <TextInput
        placeholder="Placeholder"
        placeholderTextColor="rgba(0,0,0, 0.5)"
        keyboardType="password"
        autoCapitalize="none"
        style={{
          position: "absolute",
          width: 359,
          height: 43,
          top: 685,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
          borderRadius: 28,
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.83)",
          paddingLeft: 20,
        }}
      ></TextInput>
      <TextInput style={{position: "absolute", width: 359, height: 43, top: 748, justifyContent: "center"}}></TextInput>
      <Button title="Back" onPress={() => router.back()} />
    </ImageBackground>
  );
}

/* Group 3 */

// position: absolute;
// width: 359px;
// height: 43px;
// left: 22px;
// top: 748px;

