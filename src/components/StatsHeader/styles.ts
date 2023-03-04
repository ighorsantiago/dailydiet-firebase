import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonTypeStyleProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 200px;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    background-color: ${({ type }) => (
        type === 'PRIMARY'
            ? '#E5F0DB'
            : '#F4E6E7'
    )};
`;

export const Percentage = styled.Text`
    
    font-size: 32px;
    font-weight: bold;

    margin-bottom: 10px;

    color: '#1B1D1E';
`;

export const Text = styled.Text`
    font-size: 14px;

    color: #333638;
`;

export const ArrowButton = styled(TouchableOpacity)`
    position: absolute;
    top: 56px;
    left: 24px;
`;
