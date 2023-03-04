import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonStyleTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: SelectButtonStyleTypeProps;
}

export const Container = styled.View <Props>`
    width: 144px;
    height: 34px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 1000px;
        
    background-color: #EFF0F0;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: 400;

    margin-left: 8px;

    color: #1B1D1E;
`;


export const Icon = styled.View<Props>`
    background-color: ${({ type }) => type == "PRIMARY" ? '#639339' : '#BF3B44'};
    height: 8px;
    width: 8px;
    border-radius: 100px;
`;
