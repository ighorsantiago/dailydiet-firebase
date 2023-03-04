import { Container, Number, Text, ButtonTypeStyleProps } from "./styles";

type Props = {
    number: number;
    text: string;
    type?: ButtonTypeStyleProps;
}

export function DataCard({ number, text, type='NORMAL' }: Props) {

    return (

        <Container type={type}>
            <Number>{number}</Number>
            <Text>{text}</Text>
        </Container>
    );
}