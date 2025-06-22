import { BtnContainer, Container, Subtitle, Title } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { Expense } from "../Home";
import { listCreat } from "../../storage/lists/listCreate";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "../../util/AppError";
import { Alert, Text } from "react-native";
import NavTitle from "../../components/NavTitle";
import DefaultLabel from "../../components/DefaultLabel";
import { TextInput } from "../../components/TextInput";

export function ViewExpenses() {
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
                title="Minhas Despesas"
                isShowGoBackBtn
            />

            <DefaultLabel>
                <Subtitle>Total gasto</Subtitle>
                <Text> R$ 1250,00 </Text>
            </DefaultLabel>
        </Container>
    );
}