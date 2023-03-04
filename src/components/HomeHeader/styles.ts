import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    padding: 24px;
    margin-bottom: 24px;
    
    background-color: #DEDEDE;
    // background-color: red;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Photo = styled.Image`
    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;

    border: 2px solid #333638;
`;
