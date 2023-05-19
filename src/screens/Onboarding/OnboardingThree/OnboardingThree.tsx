import React from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components';

import Homem_Feliz from '../../../assets/homem_feliz.png';
import Femenino_Triste from '../../../assets/mulher_triste.png';
import Homem_Medidor from '../../../assets/homem_medidor.png';

import ButtonNext from '../../../components/ButtonNext';
import ButtonGoBack from '../../../components/ButtonGoBack';
import CarouselPickerAzul from '../../../components/CarouselPickerAzul';

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
    ImgContainerHomen,
    TitleMasculino,
    TitleFeminino,
} from './styles'

const OnboardingThree = () => {
    const theme = useTheme();

    const toggleGoBack = () => {
        Alert.alert('Go Back');
    }

    return (
        <Container>
            <ViewHeader>
                <ImgLogo source={Homem_Medidor} />
                <ViewTitle>
                    <TitleAzul>Quanto você pesa?</TitleAzul>
                </ViewTitle>
            </ViewHeader>

            <ImgContainer>
                <ViewFeminino>
                    <CarouselPickerAzul />
                </ViewFeminino>
            </ImgContainer>

            <ImgContainerHomen>
                <ViewMasculino>
                    <ImgMasculino source={Homem_Feliz} />
                </ViewMasculino>
            </ImgContainerHomen>

            <ButtonGoBack
                onPress={toggleGoBack}
                iconName='chevron-back-outline'
            />
            <ButtonNext
                onPress={() => { }}
                name='Próximo'
            />
        </Container>
    )
}

export default OnboardingThree
