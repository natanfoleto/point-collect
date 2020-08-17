import { Platform } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

export const BoxBottons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px;
  height: 60px;
  width: 100%;
  background: #47AF50;

  position:absolute;
  bottom: 0;
  left: 0;
`;

