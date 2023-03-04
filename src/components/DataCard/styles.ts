import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'NORMAL' | 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled.View<Props>`
    flex: 1;
    min-height: 90px;

    justify-content: center;
    align-items: center;
    
    border-radius: 8px;
    
    padding: 24px;
    margin: 6px 8px;

    // background-color: #EFF0F0;
    background-color: ${({ type }) => {
        switch (type) {
            case "NORMAL": return '#EFF0F0';
            case "PRIMARY": return '#E5F0DB';
            case "SECONDARY": return '#F4E6E7';
        }
    }};
`;

export const Number = styled.Text`
    font-size: 24px;
    font-weight: bold;

    color: #1B1D1E;
`;

export const Text = styled.Text`
    font-size: 14px;
    text-align: center;
    color: #333638;
`;
