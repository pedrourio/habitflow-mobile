import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// !! IMPORTANTE !!
// Substitua 'SEU_IP_LOCAL' pelo endereço de IP da sua máquina na rede Wi-Fi
const baseURL = 'http://192.168.0.102:3000'; 

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(async (config) => {
  // Usamos AsyncStorage em vez de localStorage no React Native
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;