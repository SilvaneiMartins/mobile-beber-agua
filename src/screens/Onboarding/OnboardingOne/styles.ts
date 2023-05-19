import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: ${Platform.OS === 'android' ? 35 : 0}px;
`;

export const ImgLogo = styled.Image`
    width: 100%;
`;

export const HelloView = styled.View`
    position: absolute;
    top: 312px;
`;

export const Hello = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.AZUL};
    font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
`;

export const InfoContainer  = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(50)}px;
`;

export const Info1  = styled.Text`
    text-align: center;
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.AZUL};
    font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
`;

export const Info2 = styled.Text`
    text-align: center;
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.GRAY_MEDIUM};
    font-family: ${({ theme }) => theme.fonts.POPPINS_LIGHT};
`;

export const ButtonGradient = styled(LinearGradient).attrs({
    colors: ['rgba(26, 170, 235, 0.3)', 'rgba(26, 170, 235, 1)'],
    start: { x: 0, y: 1},
    end: {x: 1, y: 0}
})`
    width: 70%;
    height: 45px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(110)}px;
    border-radius: ${RFValue(25)}px;
`;

export const ButtonNext = styled.Pressable`
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(10)}px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.BLACK_MEDIUN};
    font-family: ${({ theme }) => theme.fonts.POPPINS_LIGHT};
`;
