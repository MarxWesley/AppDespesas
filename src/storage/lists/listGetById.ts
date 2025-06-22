import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from "../storageConfig";
import { ListItem } from "../../screens/MyList";
import { listGetAll } from "./listGetAll";

export async function listGetById(id: string) {
    try {
        const storedLists = await listGetAll();
        
        const specifiedItem = storedLists.find((item: ListItem) => item.id === id);

        return specifiedItem;

    } catch (error) {
        console.error('Erro ao pegar item por id:', error);
        return null;
    }
}