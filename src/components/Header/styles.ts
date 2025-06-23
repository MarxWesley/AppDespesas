import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native"

export const PageTitle = styled.Text`
    color: ${(props) => props.theme.COLORS.BLACK};
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    color: ${(props) => props.theme.COLORS.GARY_600};
    text-align: center;
    font-size: 14px;
    margin-top: 8px;
`;

export const GoBackBtn = styled(TouchableOpacity)`
    position: absolute;
    top: 28px;
    left: 16px;
    padding: 8px;

    justify-content: center;
    align-items: center;
`;

export const GoBackIcon = styled(CaretLeft).attrs((props) => ({
    color: props.theme.COLORS.WHITE,
    weight: 'bold',
    size: props.theme.FONT_SIZE.XL,
}))``;