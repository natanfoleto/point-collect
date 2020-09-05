import styled from 'styled-components/native';
import Constants from 'expo-constants';

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
  align-items:flex-end;
  margin-bottom: 50px;
`;

export const BoxWhite = styled.View`
  flex-direction: row;
  height: 85%;
  width: 90%;
  align-items: center;
  margin: 0 auto ;
  background: #fff;
  border-radius: 20px;
`;

export const PhotoContainer = styled.View`
  height: 128px;
  width: 128px;
  border-radius: 200px;
  margin: 0 auto 20px ;
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
  width: 200px;
  justify-content:center;
  align-items: center;
  background: #fff;
  border-radius: 200px;
  margin: 0 auto ;
  box-shadow: 1px 2px 5px black;
`;

export const TextName = styled.Text`
  font-size:18px;
  font-weight: bold;
`;


