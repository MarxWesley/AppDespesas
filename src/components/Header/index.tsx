import { useNavigation } from "@react-navigation/native";
import { Container, GoBackBtn, GoBackIcon, PageTitle } from "./styles";

type HeaderProps = {
    title: string;
    isShowGoBackBtn?: boolean;
};

export default function Header ({title, isShowGoBackBtn = false}: HeaderProps) {
    const navigation = useNavigation()
    
    return (
        <Container>
            {isShowGoBackBtn &&
                <GoBackBtn onPress={() => navigation.navigate('myList')}>
                    <GoBackIcon />
                </GoBackBtn>
            }
            <PageTitle>{title}</PageTitle>
        </Container>
    )
}