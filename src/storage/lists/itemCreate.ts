import AsyncStorage from "@react-native-async-storage/async-storage"
import { Item } from "../../screens/List"
import { AppError } from "../../util/AppError"
import { itemGetAll } from "./itemGetAll"
import { ITEM_COLLECTION } from "../storageConfig"


export async function itemCreate(newItem: Item) {
    try {
        const storedItems = await itemGetAll()

        const isItemNameAlreadyUsed = storedItems.some(
            (item: Item) => item.title === newItem.title && item.listId === newItem.listId
        );

        if(isItemNameAlreadyUsed) {
            throw new AppError('Nome de item duplicado. Não é possível adicionar itens com nomes duplicados')
        }

        const newStorage = JSON.stringify([...storedItems, newItem])

        await AsyncStorage.setItem(ITEM_COLLECTION, newStorage)
    } catch(error) {
        throw error;
    }
}