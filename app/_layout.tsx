// app/_layout.tsx
import { Stack } from 'expo-router';
import { Provider } from '@ant-design/react-native';

export default function RootLayout() {
  return (
    // O Provider do AntD fica aqui, no topo de tudo
    <Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </Provider>
  );
}