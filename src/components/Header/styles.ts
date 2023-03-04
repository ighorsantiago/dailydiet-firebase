import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'NORMAL' | 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonTypeStyleProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 132px;

    justify-content: center;
    align-items: center;

    // background-color: #DDDEDF;
    background-color: ${({ type }) => {
        switch (type) {
            case 'NORMAL': return '#DDDEDF';
            case 'PRIMARY': return '#E5F0DB';
            case 'SECONDARY': return '#F4E6E7';
        }
    }};
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const ArrowButton = styled(TouchableOpacity)`
    position: absolute;
    top: 56px;
    left: 24px;
`;
