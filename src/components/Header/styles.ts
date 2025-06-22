import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native"

export const Container = styled.View`
    position: relative;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 135px;
    padding: 50px;
`;

export const PageTitle = styled.Text`
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
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