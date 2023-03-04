import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 50px;

    flex-direction: row;

    justify-content: center;
    align-items: center;

    border-radius: 6px;

    margin-bottom: 8px;
    
    border-width: ${({ type }) => (
        type === 'PRIMARY'
            ? 0
            : 1
    )}px;

    background-color: ${({ type }) => (
        type === 'PRIMARY'
            ? '#333638'
            : '#FAFAFA'
    )};
`;

export const Text = styled.Text<Props>`
    font-size: 14px;
    font-weight: bold;

    text-align: center;
    
    margin-left: 10px;

    color: ${({ type }) => (
        type === 'PRIMARY'
            ? '#FFF'
            : '##1B1D1E'
    )};
`;
