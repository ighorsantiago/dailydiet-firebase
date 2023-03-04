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

    justify-content: space-between;
    align-items: center;

    padding: 24px;
    border-radius: 20px;
    margin-top: -10px;

    background-color: #FAFAFA;
`;

export const Form = styled.View`
    width: 100%;
    height: 65%;

    margin-top: 50px;
`;

export const Box = styled.View`
    flex-direction: row;

    margin: 14px 0;
`;

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;

    padding-left: 12px;
    // margin-top: 14px;
    // margin-bottom: 8px;
`;
