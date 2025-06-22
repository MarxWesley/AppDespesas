import { InputContainer } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
    placeholder: string;
}

export function TextInput({placeholder, ...rest}: Props) {
    const { COLORS } = useTheme();

    return (
        <InputContainer
            placeholder={placeholder}
            placeholderTextColor={COLORS.GARY_600}
            {...rest}
        />
    )    
}