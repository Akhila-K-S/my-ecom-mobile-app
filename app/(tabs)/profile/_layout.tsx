import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="orders" />
      <Stack.Screen name="wishlist" />
      <Stack.Screen name="addresses" />
      <Stack.Screen name="payments" />
      <Stack.Screen name="shops" />
      <Stack.Screen name="recent" />
      <Stack.Screen name="reviews" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="help" />
      <Stack.Screen name="about" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="edit" />
    </Stack>
  );
}
