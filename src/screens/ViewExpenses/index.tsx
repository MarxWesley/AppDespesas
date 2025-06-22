import { BtnContainer, Container, Content, Subtitle, Title } from "./styles";
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
import ExpenseAmount from "../../components/ExpenseAmount";

export function ViewExpenses() {
    const [list, setList] = useState<Expense[]>([]);

    // ✅ Soma total dos valores
    const totalAmount = 1000 //list.reduce((acc, item) => acc + item.amount, 0)
    const quantity = 10 //list.length

    return (
        <Container>
            <NavTitle 
                title="Minhas Despesas"
                isShowGoBackBtn
            />
            <Content>
                <ExpenseAmount 
                    title='Total de Despesas'
                    subtitle='Quantidade'
                    amount={totalAmount}
                    qnt={quantity}
                />
            </Content>
        </Container>
    );
}