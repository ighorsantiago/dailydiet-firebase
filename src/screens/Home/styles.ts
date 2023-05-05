import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    padding: 0 24px;

    background-color: #DEDEDE;
`;

export const Content = styled.View`
    width: 100%;
    /* margin-bottom: 10px; */
`;

export const Text = styled.Text`
    font-size: 16px;
    
    margin: 40px 0 8px;
    
    color: #333638;
`;

export const SectionHeader = styled.Text`
    font-size: 18px;
    font-weight: bold;
    
    margin-top: 12px;
    margin-bottom: 12px;
    
    color: #1B1D1E;
`;

export const LogoutBtn = styled(RectButton)``;
