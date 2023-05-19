import React from 'react'
import { useTheme } from 'styled-components';
import { PressableProps } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

import { Container, ButtonTitle, ButtonGradient } from './styles'

interface IProps extends PressableProps {
    name: string;
    onPress: () => void;
}

const ButtonNext = ({ name,  onPress = () => { } }: IProps) => {
    const theme = useTheme();
    return (
        <Container onPress={onPress}>
            <ButtonGradient>
                <ButtonTitle>{name}</ButtonTitle>
            </ButtonGradient>
        </Container>
    )
}

export default ButtonNext
