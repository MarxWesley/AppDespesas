import AsyncStorage from "@react-native-async-storage/async-storage";

import { ITEM_COLLECTION } from "../storageConfig";

export async function itemGetAll() {
    try {
        const storedItem = await AsyncStorage.getItem(ITEM_COLLECTION);

        const items = storedItem ? JSON.parse(storedItem) : []

        return items
    } catch (error) {
        throw error;
    }
}