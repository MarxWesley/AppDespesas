import { BtnContainer, Container, Content, Subtitle, Title } from "./styles";
import { useCallback, useState } from "react";
import { Expense } from "../Home";
import NavTitle from "../../components/NavTitle";
import ExpenseAmount from "../../components/ExpenseAmount";
import DefaultLabel from "../../components/DefaultLabel";
import { FlatList } from "react-native";
import { listGetAll } from "../../storage/lists/listGetAll";
import { useFocusEffect } from "@react-navigation/native";

export function ViewExpenses() {
    const [list, setList] = useState<Expense[]>([]);

    async function fecthList() {
            try {
                const data = await listGetAll()
                setList(data);
            } catch (error) {
                console.log(error)
            }
        }
    
    useFocusEffect(useCallback( () => {
        fecthList()
    }, []))

    // ✅ Soma total dos valores
    const totalAmount = list.reduce((acc, item) => acc + item.amount, 0)
    const quantity = list.length

    return (
        <Container>
            <NavTitle 
                title="Minhas Despesas"
                isShowGoBackBtn
            />

            <ExpenseAmount 
                title='Total de Despesas'
                subtitle='Quantidade'
                amount={totalAmount}
                qnt={quantity}
            />

            {list.length > 0 && 
                (<FlatList
                    data={list.filter(item => item.status === true)}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <DefaultLabel>
                            <Title>
                                {item.title}
                            </Title>
                        </DefaultLabel>
                    )} 
                />)
            }

        </Container>
    );
}