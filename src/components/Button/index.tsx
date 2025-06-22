import { Plus } from "phosphor-react-native";
import { BtnText, ButtonVariant, Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
}

export function Button({ text, icon, variant = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
        {icon}
        <BtnText variant={variant}>
            {text}
        </BtnText>
    </Container>
  );
}