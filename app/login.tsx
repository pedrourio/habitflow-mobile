// app/login.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InputItem, Button, Toast } from '@ant-design/react-native';
import api from '../src/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.fail('Por favor, preencha e-mail e senha.');
      return;
    }
    setLoading(true);
    try {
      const response = await api.post('/login', {
        user: { email, password },
      });

      const token = response.headers.authorization;
      if (token) {
        await AsyncStorage.setItem('token', token);
        Toast.success('Login bem-sucedido!');
        router.replace('/(tabs)'); // Navega para a tela principal de abas
      } else {
        Toast.fail('Token não encontrado na resposta.');
      }
    } catch (error) {
      console.error(error);
      Toast.fail('E-mail ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>HabitFlow</Text>
        <InputItem
          clear
          value={email}
          onChange={value => setEmail(value)}
          placeholder="seu@email.com"
          style={styles.input}
        >
          E-mail
        </InputItem>
        <InputItem
          clear
          type="password"
          value={password}
          onChange={value => setPassword(value)}
          placeholder="******"
          style={styles.input}
        >
          Senha
        </InputItem>
        <Button
          type="primary"
          onPress={handleLogin}
          loading={loading}
          style={styles.button}
        >
          Entrar
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  }
});