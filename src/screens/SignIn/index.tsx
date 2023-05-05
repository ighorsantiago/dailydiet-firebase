import { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    Header,
    LogoImg,
    LoginBox,
    LogLabel,
    ForgotLabel,
    LogButton,
    LogText,
    SocialBox,
    Footer,
    SocialLabel,
    SocialButtonsBox,
    SocialButton,
    SignUpText,
    SignUpButton,
    SignUpButtonText,
} from "./styles";

import { useAuth } from '../../hooks/useAuth';

import { InputForm } from "../../components/InputForm";
import { PasswordInput } from "../../components/PasswordInput";
import { useToast } from 'native-base';

export function SignIn() {

    const { user, signIn } = useAuth();
    const navigation = useNavigation();
    const toast = useToast();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSocial() {
        Alert.alert("Clicou!");
    }

    function handleNavigation(screen: 'home' | 'signUp') {

        navigation.navigate(screen);
    }

    async function handleSignIn() {

        if (!email) {
            toast.show({
                title: 'Por favor, informe seu e-mail e senha.',
                placement: 'top',
                bgColor: 'red.500'
            });
        }

        try {
            await signIn(email, password);

        } catch (error) {

            toast.show({
                title: 'Não foi possível conectar',
                placement: 'top',
                bgColor: 'red.500'
            });
            console.log(error)
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header
                        source={require("../../assets/logo.png")}
                        style={{ marginBottom: '50%' }}
                    />

                    <LoginBox>
                        <LogLabel>
                            Login
                        </LogLabel>

                        <InputForm
                            iconName="mail"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="E-mail"
                            placeholderTextColor="darkgray"
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                        <PasswordInput
                            iconName="lock"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Senha"
                            placeholderTextColor="darkgray"
                        />

                        <ForgotLabel>
                            Esqueceu a senha?
                        </ForgotLabel>
                    </LoginBox>

                    <LogButton onPress={handleSignIn}>
                        <LogText>Login</LogText>
                    </LogButton>

                    {/* <SocialBox>
                        <SocialLabel>ou faça o login com</SocialLabel>
                        <SocialButtonsBox>
                            <SocialButton onPress={handleSocial}>
                                <FontAwesome name="facebook-official" size={23} color="blue" />
                            </SocialButton>
                            <SocialButton onPress={handleSocial}>
                                <FontAwesome name="google" size={23} color="red" />
                            </SocialButton>
                            <SocialButton onPress={handleSocial}>
                                <FontAwesome name="apple" size={23} color="black" />
                            </SocialButton>
                        </SocialButtonsBox>
                    </SocialBox> */}

                    <Footer>
                        <SignUpText>Não tem uma conta? </SignUpText>
                        <SignUpButton onPress={() => handleNavigation("signUp")}>
                            <SignUpButtonText>
                                Registre-se aqui.
                            </SignUpButtonText>
                        </SignUpButton>
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}