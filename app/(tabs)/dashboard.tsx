// app/(tabs)/index.tsx
import { Toast } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const handleLogout = async () => {
  // 1. Apaga o token do armazenamento do celular
  await AsyncStorage.removeItem('token');
  Toast.success('Logout realizado com sucesso!');

  // 2. Substitui a navegação, zerando o histórico
  router.replace('/login');
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard do HabitFlow</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text>
          SAIR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 4,
    margin: 10
  }
});