import { useNavigation } from "@react-navigation/native";
import { GoBackBtn, GoBackIcon, PageTitle, Subtitle } from "./styles";
import DefaultLabel from "../DefaultLabel";

type HeaderProps = {
    title: string;
    subtitle?: string;
};

export default function Header ({title, subtitle }: HeaderProps) {
    return (
        <DefaultLabel>
            <PageTitle>{title}</PageTitle>
            <Subtitle>{subtitle}</Subtitle>
        </DefaultLabel>
    )
}