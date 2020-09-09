import styled from 'styled-components';

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

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 10px;
  border: 0.2px solid #000;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #4BCB56;

`;