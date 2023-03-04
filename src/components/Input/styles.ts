import styled from "styled-components/native";

type Props = {
    inputHeight: number;
}

export const Container = styled.View`
    flex: 1;
    min-height: 48px;

    justify-content: center;
    align-items: center;
    
    border-radius: 8px;
    
    margin: 0 8px;
`;

export const Label = styled.Text`
    font-size: 14px;

    align-self: flex-start;
    
    margin-bottom: 8px;

    color: #333638;
`;

export const TextInput = styled.TextInput<Props>`
    width: 100%;
    height: ${({inputHeight}) => inputHeight}px;
    text-align: start;
    font-size: 16px;

    padding: 10px;

    border: 1px solid #DDDEDF;
    color:  #1B1D1E;
`;
