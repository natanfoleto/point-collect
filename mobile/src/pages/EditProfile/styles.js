import styled from 'styled-components';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Button/styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`

  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: #47AF50;
`;

export const HeaderEditProfile = styled(Header)`
  background: #47AF50;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  border: 0.2px solid #000;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #FFF;

  ${Text}{
    color: #47AF50;
  }

`;