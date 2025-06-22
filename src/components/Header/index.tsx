import { useNavigation } from "@react-navigation/native";
import { Container, GoBackBtn, GoBackIcon, PageTitle, Subtitle } from "./styles";

type HeaderProps = {
    title: string;
    subtitle?: string;
    isShowGoBackBtn?: boolean;
};

export default function Header ({title, subtitle, isShowGoBackBtn = false}: HeaderProps) {
    const navigation = useNavigation()
    
    return (
        <Container>
            {isShowGoBackBtn &&
                <GoBackBtn onPress={() => navigation.navigate('myList')}>
                    <GoBackIcon />
                </GoBackBtn>
            }
            <PageTitle>{title}</PageTitle>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}