import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from "../storageConfig";
import { Expense } from "../../screens/Home";
import { listGetAll } from "./listGetAll";
import { AppError } from "../../util/AppError";

export async function listCreat(newExpense: Expense) {
    try {
        const storedExpenses = await listGetAll()

        const isExpenseNameAlreadyUsed = storedExpenses.map(
            (item: Expense) => 
            item.title).includes(newExpense.title)

        if(isExpenseNameAlreadyUsed) {
            throw new AppError('Nome de despesa duplicado. Não é possível adicionar despesas com nomes duplicados')
        }

        const newStorage = JSON.stringify([...storedExpenses, newExpense])

        await AsyncStorage.setItem(LIST_COLLECTION, newStorage)
    } catch(error) {
        throw error;
    }
}