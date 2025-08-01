export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Habit {
  id: number;
  name: string;
  description: string | null; // A descrição pode ser nula
  user_id: number;
  created_at: string; // Datas vêm como string no JSON
  updated_at: string;
  checkins: Checkin[];
}

export interface Checkin {
  id: number;
  date: string;
  habit_id: number;
}