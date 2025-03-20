import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="screen/auth/login" />
            <Stack.Screen name="screens/auth/register" />
        </Stack>
    )
}