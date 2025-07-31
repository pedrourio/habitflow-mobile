// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  // Este layout simplesmente mostra as telas dentro dele em uma pilha
  return <Stack screenOptions={{ headerShown: false }} />;
}