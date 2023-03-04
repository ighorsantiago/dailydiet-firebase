import { ButtonTypeStyleProps, Container, Text } from './styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps;
    title: string;
    icon?: boolean;
    iconName?: keyof typeof Feather.glyphMap;
    iconSize?: number;
    iconColor?: string;
}

export function Button({
    type = 'PRIMARY',
    title,
    icon = true,
    iconName,
    iconSize = 18,
    iconColor,
    ...rest
}: Props) {

    return (
        <Container
            type={type}
            {...rest}
        >
            { icon && <Feather name={iconName} size={iconSize} color={iconColor} />}
            <Text type={type}>
                {title}
            </Text>
        </Container>
    );
}