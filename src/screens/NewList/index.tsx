import { BtnContainer, Container, Content, Subtitle, Title } from "./styles";
import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { ListItem } from "../MyList";
import { listCreat } from "../../storage/lists/listCreate";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "../../util/AppError";
import { Alert } from "react-native";

export function NewList() {
    const [textInput, setTextInput] = useState('');
    const navigation = useNavigation();

    async function handleCreateList(listName: string) {
        const newId = uuid.v4() as string;
        const newDate = new Date()

        const newList: ListItem= {
            id: newId,
            title: listName.trim(),
            createdAt: newDate.toLocaleDateString('Br')
        }

        try {
            await listCreat (newList)
            navigation.navigate('myList')
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Erro na criação de lista', error.message)
            }
            console.log(error)
        }

        setTextInput('');
    }

    return (
       <Container>
            <Header title="Nova lista" isShowGoBackBtn/>

            <Content>
                <Title>
                    Nova lista
                </Title>
                <Subtitle>
                    Crie sua nova lista para adicionar itens
                </Subtitle>

                <TextInput 
                    placeholder="Nome da sua lista" 
                    onChangeText={setTextInput} 
                    value={textInput}
                />

                <BtnContainer>
                    <Button text="criar" onPress={() => handleCreateList(textInput)}/>
                </BtnContainer>
            </Content>
       </Container>
    )
}