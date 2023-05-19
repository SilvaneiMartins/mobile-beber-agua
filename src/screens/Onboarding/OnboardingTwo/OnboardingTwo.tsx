import React from 'react'
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import Homem_Feliz from '../../../assets/homem_feliz.png';
import Femenino_Triste from '../../../assets/mulher_triste.png';
import Homem_Mulher_Logo from '../../../assets/homem_mulher.png';

import ButtonNext from '../../../components/ButtonNext';
import ButtonGoBack from '../../../components/ButtonGoBack';
import {
    Container,
    ViewHeader,
    ImgLogo,
    ViewTitle,
    TitleAzul,
    TitleRosa,
    ImgMasculino,
    ImgFeminino,
    ImgContainer,
    ViewMasculino,
    ViewFeminino,
    TitleMasculino,
    TitleFeminino,
} from './styles'

const OnboardingTwo = () => {
    const theme = useTheme();

    const toggleGoBack = () => {
        Alert.alert('Go Back');
    }

    return (
        <Container>
            <ViewHeader>
                <ImgLogo source={Homem_Mulher_Logo} />
                <ViewTitle>
                    <TitleAzul>Escolha s</TitleAzul>
                    <TitleRosa>eu gênero</TitleRosa>
                </ViewTitle>
            </ViewHeader>
            <ImgContainer>
                <ViewMasculino>
                    <ImgMasculino source={Homem_Feliz} />
                    <TitleMasculino>Masculino</TitleMasculino>
                </ViewMasculino>
                <ViewFeminino>
                    <ImgFeminino source={Femenino_Triste} />
                    <TitleFeminino>Femínino</TitleFeminino>
                </ViewFeminino>
            </ImgContainer>
            <ButtonGoBack
                onPress={toggleGoBack}
                iconName='chevron-back-outline'
            />
            <ButtonNext
                onPress={() => {}}
                name='Próximo'
            />
        </Container>
    )
}

export default OnboardingTwo
