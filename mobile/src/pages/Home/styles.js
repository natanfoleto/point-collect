import { Platform } from 'react-native'
import styled from 'styled-components/native';
import { Form } from '@unform/mobile';


import Input from '../../components/Input';
import Button from '../../components/Button';


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`

  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const FormRocket = styled(Form)`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  border: 0.2px solid #000;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  background: #4BCB56;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: rgba(000,000,000, 0.4);
  font-weight: bold;
  font-size: 16px;
`;