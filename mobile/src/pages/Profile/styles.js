import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const TopBox = styled.View`
  height: 35%;
  width: 100%;
  background: #47AF50;
  justify-content: center;
  align-items:center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const PhotoContainer = styled.View`
  height: 128px;
  width: 128px;
  border-radius: 200px;
  background: #fff;
  border: 1px solid #000;
`;

export const Photo = styled.Image`

`;

export const NameContainer = styled.View`
  height: 40px;
  width: 80%;
  justify-content:center;
  align-items:center;
  background: #fff;
  border: 0.5px solid #000;
  border-radius: 200px;

  position:absolute;
  top: 32.5%;
`;

export const TextName = styled.Text`
  font-size:18px;
`;

