// app/_layout.tsx
import { Stack } from 'expo-router';
import { Provider } from '@ant-design/react-native';

export default function RootLayout() {
  return (
    <Provider>
    <Stack>
      {/* A tela de abas principal, o cabeçalho dela está escondido */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/*tela de login, que será apresentada como um modal */}
      <Stack.Screen name="login" options={{ presentation: 'modal', title: 'Login' }} />
    </Stack>
    </Provider>
  );
}