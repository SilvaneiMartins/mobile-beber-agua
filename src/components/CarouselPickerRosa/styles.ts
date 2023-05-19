import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';


const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

export const Container = styled.View`
    width: 100%;
`;

export const NumberView = styled.View`
    margin-right: ${RFValue(30)}px;
`;

export const Number = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.ROSA};
    font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
`;

export const Tipo = styled.Text`
    font-weight: bold;
    margin-left: ${RFValue(30)}px;
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.ROSA};
    font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
`;

export const Spacing = styled.View`
    width: 100%;

    border-bottom-width: 1px;
    padding: ${RFValue(5)}px;
    border-color: ${({ theme }) => theme.colors.ROSA};
`;

export const IconIndicar = styled(Ionicons)`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.ROSA};
`;

export const FooterView = styled.View`
    align-items: center;
    flex-direction: row;
    margin-left: ${RFValue(60)}px;
`;
