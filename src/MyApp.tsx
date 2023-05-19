import 'react-native-gesture-handler';

import React from 'react'
import { View, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from "@react-navigation/native";

import theme from './styles/theme';
import Routes from './routes';

const MyApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar
                    translucent
                    barStyle="dark-content"
                    backgroundColor='transparent'
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.BACKGROUND,
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default MyApp
