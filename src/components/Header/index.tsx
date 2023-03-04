import { Container, Title, ButtonTypeStyleProps, ArrowButton } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Header({ title, type='NORMAL' }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home')
    }

    return (
        <Container type={type}>
            <Title>{title}</Title>
            <ArrowButton onPress={handleGoBack}>
                <Feather name='arrow-left' size={24} color='#333638' />
            </ArrowButton>
        </Container>
    );
}