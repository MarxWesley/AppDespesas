import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;

    background: ${(props) => props.theme.COLORS.FUNDO};
    color: ${(props) => props.theme.COLORS.WHITE};
`;

export const Content = styled.View`
    flex: 1;

    width: 100%;
    padding: 0 16px 24px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.LIGHT_BLUE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GARY_600};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 32px;
`;

export const BtnContainer = styled.View`
    margin-top: 30px;
    margin-bottom: 10px;
    margin-top: auto;
    padding: 10px 16px 16px;
`;