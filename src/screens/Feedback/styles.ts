import styled from "styled-components/native";

type Props ={
    type: boolean;
}

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: #FAFAFA;
`;

export const TextBox = styled.View`
    justify-content: center;
    align-items: center;

    padding: 24px;
`;

export const Title = styled.Text<Props>`
    font-size: 24px;
    font-weight: bold;

    margin-bottom: 14px;
    color: ${({ type }) => ( type ? '#639339' : '#BF3B44' )};
`;

export const Subtitle = styled.Text`
    font-size: 16px;
    font-weight: 400;

    color: #1B1D1E;
`;

export const Image = styled.Image`
    margin-top: 50px;
`;

export const ButonContainer = styled.View`
    width: 100%;
    height: 50px;

    padding: 0 90px;
    margin-top: 24px;
`;
