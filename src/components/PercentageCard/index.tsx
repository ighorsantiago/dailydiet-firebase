import { TouchableOpacityProps } from "react-native";
import { Container, Percentage, ButtonTypeStyleProps, Text, ArrowButton } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    percentage: number;
    type?: ButtonTypeStyleProps;
}

export function PercentageCard({ percentage, type='PRIMARY', ...rest }: Props) {

    return (
        <Container type={type}>
            <Percentage>{percentage}%</Percentage>
            <ArrowButton {...rest}>
                <Feather name='arrow-up-right' size={24} color={type === 'PRIMARY' ? '#639339' : '#BF3B44'} />
            </ArrowButton>
            <Text>
                das refeições dentro da dieta
            </Text>
        </Container>
    );
}