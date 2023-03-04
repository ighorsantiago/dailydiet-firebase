import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: red;
`;

export const Content = styled.View`
    flex: 1;

    align-items: center;

    border-radius: 20px;
    margin-top: -10px;
    padding: 24px;

    background-color: #FAFAFA;
`;

export const Title = styled.Text`
    font-size: 14px;

    margin: 20px 0;

    color: #333638;
`;

export const Data = styled.View`
    width: 100%;
`;

export const CountBox = styled.View`
    flex-direction: row;

    justify-content: baseline;
`;
