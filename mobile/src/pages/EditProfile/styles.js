import styled from 'styled-components';

import Header from '../../components/Header';

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