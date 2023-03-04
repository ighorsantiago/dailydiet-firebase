import { TextInputProps } from "react-native";
import { Container, Label, TextInput } from "./styles";

type Props = TextInputProps & {
    label: string;
    inputHeight?: number;
}

export function Input({ label, inputHeight = 48, ...rest }: Props) {

    return (

        <Container>
            <Label>{label}</Label>
            <TextInput inputHeight={inputHeight} {...rest} />
        </Container>
    );
}