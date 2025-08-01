// app/(tabs)/dashboard.tsx
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Provider, Toast, WhiteSpace, WingBlank } from '@ant-design/react-native';
import api from '../../src/services/api'; // Ajuste o caminho se necessário
import { Habit } from '../../src/types/api'; // Ajuste o caminho se necessário
import { router, SplashScreen } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleLogout = async () => {
  // 1. Apaga o token do armazenamento do celular
  await AsyncStorage.removeItem('token');
    Toast.success('Logout realizado com sucesso!', 0.3);

  // 2. Substitui a navegação, zerando o histórico
  router.replace('/login');
};


export default function DashboardScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await api.get('/api/v1/habits');
        setHabits(response.data);
      } catch (error) {
        console.error(error);
        Toast.fail('Não foi possível carregar os hábitos.');
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  if (loading) {
    return null; //é comum retornar nada por conta da tela anterior ainda visível
  }

  return (
    <Provider>
      <View style={styles.container}>
        <WingBlank size="lg">
          <Text style={styles.title}>Meus Hábitoss</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text>
              SAIR
            </Text>
          </TouchableOpacity>
          <WhiteSpace size="lg" />
          <FlatList
            data={habits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <Card>
                  <Card.Header
                    title={item.name}
                  />
                  <Card.Body>
                    <View>
                      <Text style={{ marginLeft: 16 }}>{item.description || 'Sem descrição.'}</Text>
                    </View>
                  </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
              </>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhum hábito encontrado. Crie o primeiro!</Text>
            }
          />
        </WingBlank>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f9',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },
  button:{
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 4,
    margin: 10
  }
});