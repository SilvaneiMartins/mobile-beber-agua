import React from 'react'
import { useTheme } from 'styled-components';
import { PressableProps } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

import { Container, ButtonTitle, ButtonGradient } from './styles'

interface IProps extends PressableProps {
    name?: string;
    onPress: () => void;
    iconName: React.ComponentProps<typeof Ionicons>["name"];
}

const ButtonGoBack = ({ name, iconName, onPress = () => { } }: IProps) => {
    const theme = useTheme();
    return (
        <Container onPress={onPress}>
            <ButtonGradient>
                <Ionicons
                    name={iconName}
                    size={25}
                    color={theme.colors.WRITE}
                    style={{ marginLeft: -8}}
                />
                <ButtonTitle>{name}</ButtonTitle>
            </ButtonGradient>
        </Container>
    )
}

export default ButtonGoBack
