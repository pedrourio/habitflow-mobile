// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* A tela de abas principal, escondemos o cabeçalho dela */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Nossa nova tela de login, que será apresentada como um modal */}
      <Stack.Screen name="login" options={{ presentation: 'modal', title: 'Login' }} />
    </Stack>
  );
}