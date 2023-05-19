import React from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components';

import Homem_Feliz from '../../../assets/homem_feliz.png';
import Femenino_Feliz from '../../../assets/mulher_feliz.png';
import Femenino_Medidor from '../../../assets/mulher_medido.png';

import ButtonNext from '../../../components/ButtonNext';
import ButtonGoBack from '../../../components/ButtonGoBack';
import CarouselPickerRosa from '../../../components/CarouselPickerRosa';

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

const OnboardingFour = () => {
    const theme = useTheme();

    const toggleGoBack = () => {
        Alert.alert('Go Back');
    }

    return (
        <Container>
            <ViewHeader>
                <ImgLogo source={Femenino_Medidor} />
                <ViewTitle>
                    <TitleRosa>Quanto você pesa?</TitleRosa>
                </ViewTitle>
            </ViewHeader>

            <ImgContainer>
                <ViewFeminino>
                    <CarouselPickerRosa />
                </ViewFeminino>
            </ImgContainer>

            <ImgContainerHomen>
                <ViewMasculino>
                    <ImgMasculino source={Femenino_Feliz} />
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

export default OnboardingFour
