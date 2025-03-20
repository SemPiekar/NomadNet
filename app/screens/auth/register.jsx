import { Button, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

export default function RegisterScreen() {
    const router = useRouter()
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 24}}>Register</Text>
      <Button title="Back" onPress={() => router.back()}/>
    </View>
  )
}