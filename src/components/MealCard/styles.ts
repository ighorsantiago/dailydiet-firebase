import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    status: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    border: 1px solid gray;
    border-radius: 6px;

    margin-bottom: 12px;

    padding: 24px;
`;

export const Hour = styled.Text`
    font-size: 12px;
`;

export const Divider = styled.View`
    width: 0;
    height: 80%;

    border-width: 1px;
    border-color: #B9BBBC;
`;

export const MealName = styled.Text`
    width: 200px;
    font-size: 16px;

    align-self: stretch;
`;

export const Status = styled.View<Props>`
    width: 14px;
    height: 14px;

    border-radius: 7px;

    background-color: ${({ status }) => (
        status === 'PRIMARY'
            ? '#E5F0DB'
            : '#F4E6E7'
    )};
`;
