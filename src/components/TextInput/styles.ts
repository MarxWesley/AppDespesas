import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(TextInput)`

    width: 100%;

    border: ${({theme}) => `1px solid ${theme.COLORS.GARY_600}`};
    color: ${(props) => props.theme.COLORS.WHITE};
    font=family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;

    padding: 12px 8px;

    border-radius: 4px;

`;