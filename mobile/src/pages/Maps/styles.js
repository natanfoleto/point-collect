import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 14px;
`;

export const DialogContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`

  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const PointLocation = styled.Image`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 200px;
  border-width: 3px;
  border-color: rgba(71, 175, 80, 0.8);
`;

export const CalloutContainer = styled.View`
  width: 260px;
  height: auto;
`;

export const TextNameBold = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const TextMore = styled.Text`
  font-size: 16px;
  color: blue;
`;

export const BoxBottons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  background: #47AF50;

  position:absolute;
  bottom: 0;
  left: 0;
`;
