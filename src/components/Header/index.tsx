import { useNavigation } from "@react-navigation/native";
import { GoBackBtn, GoBackIcon, PageTitle, Subtitle } from "./styles";
import DefaultLabel from "../DefaultLabel";

type HeaderProps = {
    title: string;
    subtitle?: string;
    isShowGoBackBtn?: boolean;
};

export default function Header ({title, subtitle, isShowGoBackBtn = false}: HeaderProps) {
    const navigation = useNavigation()
    
    return (
        <DefaultLabel>
            {isShowGoBackBtn &&
                <GoBackBtn onPress={() => navigation.navigate('myList')}>
                    <GoBackIcon />
                </GoBackBtn>
            }
            <PageTitle>{title}</PageTitle>
            <Subtitle>{subtitle}</Subtitle>
        </DefaultLabel>
    )
}