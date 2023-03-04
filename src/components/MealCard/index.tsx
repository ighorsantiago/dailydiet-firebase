import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Divider, MealName, Status, Hour } from './styles';

type Props = TouchableOpacityProps & {
    hour: string;
    mealName: string;
    status?: ButtonTypeStyleProps;
}

export function MealCard({ hour, mealName, status='PRIMARY', ...rest }: Props) {

    return (
        <Container {...rest}>
            <Hour>{hour}</Hour>
            <Divider />
            <MealName>{mealName}</MealName>
            <Status status={status} />
        </Container>
    );
}
