import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
    flex: 1;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    right: ${RFValue(40)}px;
    bottom: ${RFValue(30)}px;
    width: ${RFValue(90)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(30)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.AZUL_BEBE};
`;

export const ButtonTitle = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.WRITE};
    font-family: ${({ theme }) => theme.fonts.POPPINS_LIGHT};
`;

export const ButtonGradient = styled(LinearGradient).attrs({
    colors: ['rgba(26, 170, 235, 0.3)', 'rgba(26, 170, 235, 1.5)'],
    start: { x: 0, y: 1},
    end: {x: 1, y: 0}
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(30)}px;
    z-index: 1;
`;
