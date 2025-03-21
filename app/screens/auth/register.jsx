import { Button, Text, View, ImageBackground } from 'react-native'
import { useRouter } from 'expo-router'

export default function RegisterScreen() {
    const router = useRouter()
  return (
    <ImageBackground source={require("../../../assets/images/Register.png")} style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 24}}>Register</Text>
      <Button title="Back" onPress={() => router.back()}/>
    </ImageBackground>
  )
}