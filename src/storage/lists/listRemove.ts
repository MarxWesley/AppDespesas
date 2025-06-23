// src/storage/lists/listRemove.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Expense } from '../../screens/Home';
import { LIST_COLLECTION } from '../storageConfig';

export async function listRemove(id: string): Promise<void> {
  try {
    const storage = await AsyncStorage.getItem(LIST_COLLECTION);
    const expenses: Expense[] = storage ? JSON.parse(storage) : [];

    const updatedList = expenses.filter(expense => expense.id !== id);

    await AsyncStorage.setItem(LIST_COLLECTION, JSON.stringify(updatedList));
  } catch (error) {
    throw error;
  }
}
