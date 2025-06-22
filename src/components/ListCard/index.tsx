import { CardData, CardIcon, CardTitle, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ListItem } from '../../screens/Home';

type ListCardProps = TouchableOpacityProps & {
    listData: ListItem;
}

export function ListCard ({listData, ...rest}: ListCardProps) {
    return (
        <Container {...rest}>
            <CardTitle>
                {listData.title}
            </CardTitle>
            <CardData>
                {`Criado em: ${listData.createdAt}`}
            </CardData>

            <CardIcon/>
        </Container>
    )
}