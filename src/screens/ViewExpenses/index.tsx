import { Amount, Container, Content, DateText, Delete, IconWrapper, LeftContent, RightContent, Subtitle, Title, TitleLabel } from "./styles";
import { useCallback, useState } from "react";
import { Expense } from "../Home";
import NavTitle from "../../components/NavTitle";
import DefaultLabel from "../../components/DefaultLabel";
import { FlatList } from "react-native";
import { listGetAll } from "../../storage/lists/listGetAll";
import { useFocusEffect } from "@react-navigation/native";
import { listRemove } from '../../storage/lists/listRemove';
import { Alert } from "react-native";


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


    async function handleOnDelete (id: string) {
        try {
            await listRemove(id);
            fecthList();
        } catch (error) {
            Alert.alert('Erro ao deletar', 'Não foi possível remover a despesa.');
            console.log(error);
        }
    };

    // ✅ Soma total dos valores
    const totalAmount = list.reduce((acc, item) => acc + item.amount, 0)

    return (
        <Container>
            <NavTitle 
                title="Minhas Despesas"
                isShowGoBackBtn
            />

            <DefaultLabel>
                <Subtitle>
                    Total gasto
                </Subtitle>
                <Title>
                    R$ {totalAmount}
                </Title>
            </DefaultLabel>

            {list.length > 0 && 
                (<FlatList
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingBottom: 24,
                        paddingTop: 8
                    }}
                    style={{ flex: 1, width: '100%' }}
                    data={list.filter(item => item.status === true)}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <DefaultLabel>
                            <Content>
                                <LeftContent>
                                    <TitleLabel>
                                        {item.title}
                                    </TitleLabel>
                                    <DateText>
                                        {item.date}
                                    </DateText>
                                </LeftContent>

                                <RightContent>
                                    <Amount>
                                        R$ {item.amount}
                                    </Amount>
                                    <IconWrapper onPress={() => handleOnDelete(item.id)}>
                                        <Delete/>
                                    </IconWrapper>
                                </RightContent>
                            </Content>
                        </DefaultLabel>
                    )} 
                />)
            }
        </Container>
    );
}