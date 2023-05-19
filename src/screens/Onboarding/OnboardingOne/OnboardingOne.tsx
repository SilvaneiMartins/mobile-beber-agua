import React from 'react'
import { Alert, Button, Pressable, Text, View } from 'react-native';
import Logo from '../../../assets/homem_logo.png';

import {
    Container,
    ImgLogo,
    InfoContainer,
    Info1,
    Info2,
    ButtonNext,
    ButtonText,
    ButtonGradient,
    Hello,
    HelloView,
} from './styles';

const OnboardingOne = () => {

    const toggleEntrar = () => {
        Alert.alert('Entrou...');
    }

    return (
        <Container>
            <ImgLogo source={Logo} />

            <HelloView>
                <Hello>Ola !</Hello>
            </HelloView>

            <InfoContainer>
                <Info1>Deixe-me ajudá-lo a {'\n'} manter-se hidratado e saudável</Info1>
                <Info2>
                    A fim de fornecer conselhos de hidratação {'\n'} personalizados,
                    preciso obter algumas informações {'\n'} básicas.
                    E vou manter isso em segredo.
                </Info2>
            </InfoContainer>

            <ButtonGradient>
                <ButtonNext onPress={toggleEntrar}>
                    <ButtonText>Vamos</ButtonText>
                </ButtonNext>
            </ButtonGradient>
        </Container>
    )
}

export default OnboardingOne
