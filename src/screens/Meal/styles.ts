import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: #FFF;
`;

export const Header = styled.View`
    width: 100%;
    height: 132px;

    justify-content: center;
    align-items: center;

    background-color: #DDDEDF;
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;

    top: 56px;
    left: 24px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Content = styled.View`
    flex: 1;

    // justify-content: space-between;
    align-items: center;

    padding: 0 24px;
    border-radius: 20px;
    margin-top: -10px;

    background-color: #FAFAFA;
`;

export const Info = styled.View`
    width: 100%;
    height: 65%;

    margin-top: 50px;
`;

export const MealInfo = styled.View`
    margin-bottom: 24px;
`;

export const MealTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;

    color: #1B1D1E;
`;

export const MealSubitle = styled.Text`
    font-size: 16px;
    font-weight: 400;

    color: #333638;
`;

export const DateInfo = styled.View`
    margin-bottom: 24px;
`;

export const DateTitle = styled.Text`
    font-size: 14px;
    font-weight: 700;

    color: #1B1D1E;
`;

export const DateSubitle = styled.Text`
    font-size: 16px;
    font-weight: 400;

    color: #333638;
`;


export const Box = styled.View`
    flex-direction: row;

    margin: 14px 0;
`;
