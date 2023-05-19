import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import OnboardingOne from '../screens/Onboarding/OnboardingOne';
import OnboardingTwo from '../screens/Onboarding/OnboardingTwo';
import OnboardingThree from '../screens/Onboarding/OnboardingThree';
import OnboardingFour from '../screens/Onboarding/OnboardingFour';
import OnboardingFive from '../screens/Onboarding/OnboardingFive';
import OnboardingSix from '../screens/Onboarding/OnboardingSix';
import OnboardingSeven from '../screens/Onboarding/OnboardingSeven';
import OnboardingEight from '../screens/Onboarding/OnboardingEight';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='OnboardingOne' component={OnboardingOne} />
        <Stack.Screen name='OnboardingTwo' component={OnboardingTwo} />
        <Stack.Screen name='OnboardingThree' component={OnboardingThree} />
        <Stack.Screen name='OnboardingFour' component={OnboardingFour} />
        <Stack.Screen name='OnboardingFive' component={OnboardingFive} />
        <Stack.Screen name='OnboardingSix' component={OnboardingSix} />
        <Stack.Screen name='OnboardingSeven' component={OnboardingSeven} />
        <Stack.Screen name='OnboardingEight' component={OnboardingEight} />
    </Stack.Navigator>
)

export default AppRoutes
