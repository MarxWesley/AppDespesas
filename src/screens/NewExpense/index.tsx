import { BtnContainer, Container, Subtitle, Title } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { Expense } from "../Home";
import { listCreat } from "../../storage/lists/listCreate";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "../../util/AppError";
import { Alert } from "react-native";
import NavTitle from "../../components/NavTitle";
import DefaultLabel from "../../components/DefaultLabel";
import { TextInput } from "../../components/TextInput";

export function NewExpense() {
    const [expense, setExpense] = useState({
        id: '',
        title: '',
        amount: 0,
        description: '',
        status: true
    });

    const navigation = useNavigation();

    async function handleCreate() {
        const newId = uuid.v4() as string;

        const newExpense: Expense = {
            id: newId,
            title: expense.title.trim().toUpperCase(),
            amount: expense.amount,
            description: expense.description.trim(),
            status: expense.status
        };

        try {
            await listCreat(newExpense);
            navigation.navigate('home');
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Erro na criação de despesa', error.message);
            }
            console.log(error);
        }

        console.log(expense)
        // Limpa os campos
        setExpense({
            id: '',
            title: '',
            amount: 0,
            description: '',
            status: true
        });
    }

    return (
        <Container>
            <NavTitle 
                title="Inserir despesa"
                isShowGoBackBtn
            />

            <DefaultLabel>
                <Title>Nova lista</Title>
                <Subtitle>Crie sua nova lista para adicionar itens</Subtitle>

                <TextInput 
                    placeholder="Tipo da despesa" 
                    value={expense.title}
                    onChangeText={(text) =>
                        setExpense(prev => ({
                            ...prev,
                            title: text
                        }))
                    }
                />

                <TextInput 
                    placeholder="Valor" 
                    keyboardType="numeric"
                    value={expense.amount ? expense.amount.toString() : ''}
                    onChangeText={(text) =>
                        setExpense(prev => ({
                            ...prev,
                            amount: Number(text)
                        }))
                    }
                />

                <TextInput 
                    placeholder="Descrição (opcional)" 
                    value={expense.description}
                    onChangeText={(text) =>
                        setExpense(prev => ({
                            ...prev,
                            description: text
                        }))
                    }
                />

                <BtnContainer>
                    <Button 
                        text="Adicionar despesa" 
                        onPress={handleCreate}
                    />
                </BtnContainer>
            </DefaultLabel>
        </Container>
    );
}