import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1;
    margin-top: ${Platform.OS === 'android' ? 35 : 0}px;
`;

export const ViewHeader = styled.View`
    align-items: center;
    padding: ${RFValue(15)}px;
    margin-top: ${RFValue(40)}px;
`;

export const ImgLogo = styled.Image`
`;

export const ViewTitle = styled.View`
    margin-top: ${RFValue(25)}px;
    flex-direction: row;
`;

export const TitleAzul = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.AZUL};
    font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
`;

export const TitleRosa = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.ROSA};
    font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
`;


export const ImgMasculino = styled.Image`
    margin-top: ${RFValue(15)}px;
`;

export const ImgFeminino = styled.Image`
    margin-top: ${RFValue(15)}px;
`;

export const ImgContainer = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`;

export const ViewMasculino  = styled.View`
    align-items: center;
    padding: ${RFValue(20)}px;
    margin-bottom: ${RFValue(50)}px;
`;

export const ViewFeminino = styled.View`
    align-items: center;
    padding: ${RFValue(20)}px;
    margin-bottom: ${RFValue(50)}px;
`;

export const TitleMasculino = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-top: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.AZUL};
    font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
`;
export const TitleFeminino = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-top: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.ROSA};
    font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
`;
