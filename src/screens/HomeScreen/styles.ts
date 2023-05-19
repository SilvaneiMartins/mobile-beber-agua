import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin-top: ${Platform.OS === 'android' ? 35 : 0}px;
`;
