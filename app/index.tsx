// app/index.tsx
import { Redirect } from 'expo-router';

export default function StartPage() {
  // Esta página é a primeira a ser carregada (rota "/")
  // e ela imediatamente redireciona o usuário para a tela de login.
  return <Redirect href="/login" />;
}