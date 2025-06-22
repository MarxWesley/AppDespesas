import { Basket } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    min-height: 125px;
    max-height: 125px;
    position: relative;

    width: 100%;
    border-radius: 12px;

    background-color: ${({theme}) => theme.COLORS.GARY_200};
    padding: 16px 24px;
`;

export const CardTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`;

export const CardData = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GARY_600};
    font-size: ${({theme}) => theme.FONT_SIZE.XSM}px;
`;

export const CardIcon = styled(Basket).attrs(({theme})=> ({
    color: theme.COLORS.BLACK,
    weight: 'regular',
    size: theme.FONT_SIZE.XL,
}))`
    position: absolute;
    right: 24px;
    top: 20px;
`;