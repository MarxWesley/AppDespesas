import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from "../storageConfig";
import { ListItem } from "../../screens/Home";
import { listGetAll } from "./listGetAll";
import { AppError } from "../../util/AppError";

export async function listCreat(newList: ListItem) {
    try {
        const storedLists = await listGetAll()

        const isListNameAlreadyUsed = storedLists.map((item: ListItem) => item.title).includes(newList.title)

        if(isListNameAlreadyUsed) {
            throw new AppError('Nome de lista duplicado. Não é possível adicionar listas com nomes duplicados')
        }

        const newStorage = JSON.stringify([...storedLists, newList])

        await AsyncStorage.setItem(LIST_COLLECTION, newStorage)
    } catch(error) {
        throw error;
    }
}