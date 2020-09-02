import styled from 'styled-components/native';
import Constants from 'expo-constants';

import ButtonBar from '../../components/ButtonBar';

export const ButtonEdit = styled(ButtonBar)`

`;

export const Container = styled.View`
  flex:1;
  align-items:center;
  margin-top: ${Constants.statusBarHeight + 3};
`;

export const TopBox = styled.View`
  height: 30%;
  width: 100%;
  background: #47AF50;
  justify-content: center;
  align-items:center;
  margin-bottom: 50px;
`;

export const PhotoContainer = styled.View`
  height: 128px;
  width: 128px;
  border-radius: 200px;
  margin-bottom: 20px;
  border : 1px solid #000;
  background: #ddd;
`;

export const Photo = styled.Image`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const NameContainer = styled.View`
  height: 30px;
  width: 80%;
  justify-content:center;
  align-items: center;
  background: #fff;
  border-radius: 200px;
  box-shadow: 1px 2px 5px black;
`;

export const TextName = styled.Text`
  font-size:18px;
  font-weight: bold;
`;


