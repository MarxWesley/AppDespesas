import { BtnText, ButtonVariant, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    text: string;
    variant?: ButtonVariant;
}

export function Button({text, variant = "PRIMARY", ...rest}: ButtonProps) {
    return (
        <Container variant={variant} {...rest}>
            <BtnText>{text}</BtnText>
        </Container>
    )
}