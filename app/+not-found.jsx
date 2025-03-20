import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignitems: "center" }}>
      <Text style={{ fontSize: 24 }}>Page not found</Text>
      <Button title="Back To Home" onPress={() => router.replace("/")} />
    </View>
  );
}
