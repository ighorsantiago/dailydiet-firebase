import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonStyleTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: SelectButtonStyleTypeProps;
    isSelected?: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    border-width: 1px;
    
    border-color: ${({ type, isSelected }) => isSelected
        ? (type == "PRIMARY" ? '#639339' : '#BF3B44')
        : '#EFF0F0'};

    margin: 6px 8px;
    
    background-color: ${({ type, isSelected }) => isSelected 
        ? (type == "PRIMARY" ? '#E5F0DB' : '#F4E6E7')
        : '#EFF0F0'};
`;

export const Label = styled.Text`
    font-size: 14px;

    align-self: flex-start;
    
    margin-bottom: 8px;

    color: #333638;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #333638;
    font-weight: bold;
    margin-left: 8px;
`;


export const Icon = styled.View<Props>`
    background-color: ${({ type }) => type == "PRIMARY" ? '#639339' : '#BF3B44'};
    height: 8px;
    width: 8px;
    border-radius: 100px;
`;
