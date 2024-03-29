import styled from 'styled-components';

import Header from '../../components/Header';
import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background: #fff;
`;

export const HeaderEditProfile = styled(Header)`
  background: #47AF50;
  padding: 10px 5px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Title = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  color: #47AF50;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 25px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: 0.7px solid #47AF50;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #47AF50;
  height: 46px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
  font-size: 16px;
`;