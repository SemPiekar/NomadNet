import { View, Text, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser)); 
        } else {
          Alert.alert("Error", "No user found.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred while fetching user data.");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user"); 
      router.push("../../../index");
    } catch (error) {
      Alert.alert("Error", "An error occurred while logging out.");
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Profile Page</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Password: {user.password}</Text>
          <Button title="Log Out" onPress={handleLogout} />
        </>
      ) : (
        <Text style={styles.text}>Loading user data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
