import { Container, Percentage, ButtonTypeStyleProps, Text, ArrowButton } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type Props = {
    percentage: number;
    type?: ButtonTypeStyleProps;
}

export function StatsHeader({ percentage, type='PRIMARY', ...rest }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home')
    }

    return (
        <Container type={type}>
            <Percentage>{percentage}%</Percentage>
            <ArrowButton onPress={handleGoBack}>
                <Feather name='arrow-left' size={24} color={type === 'PRIMARY' ? '#639339' : '#BF3B44'} />
            </ArrowButton>
            <Text>
                das refeições dentro da dieta
            </Text>
        </Container>
    );
}