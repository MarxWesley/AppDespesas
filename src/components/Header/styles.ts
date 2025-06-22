import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native"

export const Container = styled.View`
    background-color: #fff;
    margin: 16px;
    padding: 20px;
    width: 90%;
    border-radius: 12px;
    align-items: center;
    elevation: 3px;
    shadow-color: #000;
    shadow-opacity: 0.1px;
    shadow-radius: 4px;
`;

export const PageTitle = styled.Text`
    color: ${(props) => props.theme.COLORS.BLACK};
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    color: ${(props) => props.theme.COLORS.GARY_600};
    text-align: center;
    font-size: 14;
    margin-top: 8;
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