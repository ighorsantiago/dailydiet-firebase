import { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useToast } from 'native-base';

import { useAuth } from '../../hooks/useAuth';

import {
    Container,
    Header,
    LogoImg,
    RegisterBox,
    RigisterLabel,
    RegisterButton,
    RegisterText,
    SocialBox,
    Footer,
    SocialLabel,
    SocialButtonsBox,
    SocialButton,
    SignUpText,
    SignUpButton,
    SignUpButtonText,
} from "./styles";

import { InputForm } from "../../components/InputForm";
import { PasswordInput } from "../../components/PasswordInput";

export function SignUp() {

    const navigation = useNavigation();
    const { user, signUp } = useAuth();
    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignUp() {

        try {
            setIsLoading(true);

            const userLogged = {
                name,
                email,
                meals: [],
                dates: [],
            }

            signUp(userLogged, password);
        } catch (error) {

            setIsLoading(false);
            
            toast.show({
                title: 'Não foi possível registrar o usuário',
                placement: 'top',
                bgColor: 'red.500'
            })
            console.log('Erro da tela de signUp:', error);
        }

    }

    function handleAlreadyRegistered() {
        navigation.goBack();
    }

    function handleSocial() {
        Alert.alert("Clicou!");
    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header
                        source={require("../../assets/logo.png")}
                        style={{ marginBottom: '50%' }}
                    />

                    <RegisterBox>
                        <RigisterLabel>
                            Cadastro
                        </RigisterLabel>

                        <InputForm
                            iconName="user"
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome"
                            placeholderTextColor="gray"
                            autoCapitalize='words'
                        />

                        <InputForm
                            iconName="mail"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="E-mail"
                            placeholderTextColor="gray"
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />

                        <PasswordInput
                            iconName="lock"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Senha"
                            placeholderTextColor="gray"
                        />

                        <PasswordInput
                            iconName="lock"
                            value={passwordConfirm}
                            onChangeText={setPasswordConfirm}
                            placeholder="Confirme a senha"
                            placeholderTextColor="gray"
                        />
                    </RegisterBox>

                    <RegisterButton onPress={handleSignUp}>
                        <RegisterText>Cadastrar</RegisterText>
                    </RegisterButton>

                    {/* <SocialBox>
                        <SocialLabel>ou registre-se com</SocialLabel>
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

                    <SignUpButton onPress={handleAlreadyRegistered}>
                        <SignUpButtonText>
                            Já tem uma conta?
                        </SignUpButtonText>
                    </SignUpButton>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}