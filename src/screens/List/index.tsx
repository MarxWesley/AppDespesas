import { useCallback, useState } from "react";
import Header from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { AddButton, AddIcon, AddItemForm, Container, Content, ItemsHeaderContainer, ItemsQuantity, ItemsTitle, Subtitle, Title } from "./styles";
import uuid from 'react-native-uuid';
import { itemGetAll } from "../../storage/lists/itemGetAll";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Alert, FlatList, Text } from "react-native";
import { itemCreate } from "../../storage/lists/itemCreate";
import { AppError } from "../../util/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";

export type Item = {
    id: string;
    title: string;
    listId: string;
}

export function List() {
    const route = useRoute();
    const { listId, title } = route.params as { listId: string; title: string };

    const [item, setItem] = useState('')
    const [listItem, setListItem] = useState<Item[]>([])

    async function handleCreateItem(itemName: string) {
        const newId = uuid.v4() as string;

        const newItem: Item = {
            id: newId,
            title: itemName.trim().toLowerCase(),
            listId: listId
        }

        try {
            await itemCreate(newItem)
            fetchItems();
            setItem('');
            console.log(listItem)
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Erro na criação do item', error.message)
            }
            console.log(error);
        }
    }

    async function fetchItems() {
        try {
            const data = await itemGetAll()
            setListItem(data);
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(useCallback( () => { 
            fetchItems()
    }, []))

    return (
        <Container>
            <Header 
                title='Lista' 
            />

            <Content>
                <Title>{title}</Title>
                <Subtitle>Adicione itens a lista de compras</Subtitle>

                <AddItemForm>
                    <TextInput 
                        placeholder="Adicione um novo item"
                        onChangeText={setItem}
                        value={item}
                    />

                    <AddButton onPress={() => handleCreateItem(item)}>
                        <AddIcon/>
                    </AddButton>
                </AddItemForm>   

                <ItemsHeaderContainer>
                    <ItemsTitle>Compras</ItemsTitle>
                    <ItemsQuantity>
                        {`Items: ${listItem.length ? listItem.length : 0}`}
                    </ItemsQuantity>
                </ItemsHeaderContainer>

                {listItem.length > 0 && 
                    (<FlatList
                        data={listItem.filter(item => item.listId === listId)}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <Text style={{color: '#fff'}}>
                                {item.title}
                            </Text>
                        )} 
                    />)
                }
2
                <Button 
                    text="remover lista" 
                />

            </Content>
        </Container>
    )
}