// app/index.tsx
import { Redirect, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

export default function Index() {
  const [token, setToken] = useState<string | null | undefined>(undefined);
  
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken);
      SplashScreen.hideAsync();
    };
    checkToken();
  }, []);

  if (token === undefined) {
    return <View />; // Ou um Spinner
  }
  
  if (token) {
    // Se tem token, vai para a primeira tela do grupo (tabs)
    return <Redirect href="/(tabs)/dashboard" />;
  }

  // Se não tem token, vai para a primeira tela do grupo (auth)
  return <Redirect href="/(auth)/login" />;
}