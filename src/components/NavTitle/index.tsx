import { useNavigation } from "@react-navigation/native";
import { Container, GoBackBtn, GoBackIcon, Title } from "./styles";

type NavTitleProps = {
    title: string;
    isShowGoBackBtn?: boolean;
}

export default function NavTitle ({title, isShowGoBackBtn = false}: NavTitleProps) {
    const navigation = useNavigation()
    
    return (
            <Container>
                {isShowGoBackBtn &&
                    <GoBackBtn onPress={() => navigation.navigate('home')}>
                        <GoBackIcon />
                    </GoBackBtn>
                }
                <Title>
                   {title}
                </Title>
            </Container>
    )
};