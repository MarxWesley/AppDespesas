import { BtnContainer, Container, Content, Subtitle, Title } from './styles'
import Header from "../../components/Header";
import { Button } from '../../components/Button';
import { ListCard } from '../../components/ListCard';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { listGetAll } from '../../storage/lists/listGetAll';

export type ListItem = {
    id: string;
    title: string;
    createdAt: string;
}

export function MyList() {
    const [list, setList] = useState<ListItem[]>([]);

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

    const handleItemPress = (id: string, title: string) => {
        navigation.navigate('list', {listId: id, title: title})
    }

    return (
        <Container>
            <Header 
                title='Minhas listas' 
            />
            <Content>
                <Title>Listas</Title>
                <Subtitle>Adicione lista de compras</Subtitle>

                { list.length > 0 &&
                    (<FlatList
                        data={list}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ListCard 
                                listData={item} 
                                onPress={() => handleItemPress(item.id, item.title)}/>
                        )}
                        contentContainerStyle={{gap: 12, paddingBottom: 100}}
                    />) 
                } 

            </Content>

             <BtnContainer>
                    <Button text='Criar lista' onPress={() => navigation.navigate('newList')}/>
            </BtnContainer>
        </Container>
    )
}