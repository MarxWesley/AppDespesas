import styled from "styled-components/native";

export type ButtonVariant = 'PRIMARY' | 'DANGER';

export type BtnStylesProps = {
    variant: ButtonVariant;
}

export const Container = styled.TouchableOpacity<BtnStylesProps>`
    max-height: 55px;
    min-height: 55px;

    min-width: 100%;

    border-radius: 8px;

    align-items: center;
    justify-content: center;

    margin-top: auto;

    background-color: ${({ theme, variant }) => variant === "PRIMARY" ? theme.COLORS.LIGHT_BLUE : theme.COLORS.RED};
`;

export const BtnText = styled.Text`
    text-transform: uppercase;

    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    color: ${({ theme }) => theme.COLORS.WHITE};
`;