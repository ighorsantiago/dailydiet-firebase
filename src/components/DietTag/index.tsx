import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, SelectButtonStyleTypeProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: SelectButtonStyleTypeProps;
};

export function DietTag({
    title,
    type = "PRIMARY",
    ...rest
}: Props) {
    return (
        <Container {...rest} type={type}>
            <Icon type={type} />
            <Title>{title}</Title>
        </Container>
    );
}