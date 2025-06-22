import { BtnContainer, Container, Content, Subtitle, Title } from './styles'
import { Button } from '../../components/Button';
import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { listGetAll } from '../../storage/lists/listGetAll';
import { ListDashes, Plus } from 'phosphor-react-native';
import Header from '../../components/Header';
import ExpenseAmount from '../../components/ExpenseAmount';

export type Expense = {
    id: string;
    title: string;
    amount: number;
    description?: string;
    status: boolean;
}

export function Home() {
    const [list, setList] = useState<Expense[]>([]);

    const navigation = useNavigation()
    
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
            <Header 
                title='Despesas pessoais' 
                subtitle='Gerencie suas despesas de forma simples e organizada'
            />
            <Content>
                <ExpenseAmount 
                    title='Total de Despesas'
                    subtitle='Quantidade'
                    amount={totalAmount}
                    qnt={quantity}
                />
            </Content>

             <BtnContainer>
                    <Button 
                        icon={<Plus color='white' size={20} weight='bold'/>}
                        text='Inserir despesa' 
                        onPress={() => navigation.navigate('newExpense')}
                    />
                    <Button 
                        variant='SECUNDARY'
                        icon={<ListDashes color='black' size={20} weight='bold'/>}
                        text='Ver despesas' 
                        onPress={() => navigation.navigate('viewExpenses')}
                    />
            </BtnContainer>
        </Container>
    )
}