import { User } from '../types';
import { MOCK_USERS } from '../constants';

export const login = async (username: string): Promise<User | null> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const user = MOCK_USERS.find(u => u.username === username);
  return user || null;
};