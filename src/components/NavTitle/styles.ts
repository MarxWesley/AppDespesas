import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
    flex-direction: row;
    position: relative;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.COLORS.BLACK};
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const GoBackBtn = styled(TouchableOpacity)`
    position: absolute;
    left:-50px;
`;

export const GoBackIcon = styled(CaretLeft).attrs((props) => ({
    color: props.theme.COLORS.BLACK,
    weight: 'bold',
    size: props.theme.FONT_SIZE.XL,
}))``;