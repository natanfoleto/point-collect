import styled from 'styled-components/native';

import Input from '../../components/Input';

export const Text = styled.Text`
  font-size: 14px;
`;

export const SearchInput = styled(Input)`
  width: 80%;
  margin-top: 100px;
  border: 1px solid #000;
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
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  background: #47AF50;

  position:absolute;
  bottom: 0;
  left: 0;
`;
