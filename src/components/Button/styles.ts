import styled from "styled-components/native";

export type ButtonVariant = 'PRIMARY' | 'SECUNDARY';

export type BtnStylesProps = {
    variant: ButtonVariant;
}

export const Container = styled.TouchableOpacity<BtnStylesProps>`
    max-height: 55px;
    min-height: 55px;
    flex-direction: row;

    min-width: 100%;

    border-radius: 8px;

    align-items: center;
    justify-content: center;

    gap: 10px;

    margin-top: auto;

    margin-bottom: 10px;

    background-color: ${({ theme, variant }) => variant === "PRIMARY" ? theme.COLORS.BLACK : theme.COLORS.WHITE};
`;

export const BtnText = styled.Text<BtnStylesProps>`
    text-transform: uppercase;

    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    color: ${({ theme, variant }) => 
        variant === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`;