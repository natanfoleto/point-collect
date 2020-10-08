import styled from 'styled-components/native';

import Header from '../../components/Header';

export const HeaderProfile = styled(Header)`
  background: #47AF50;
`;

export const Container = styled.View`
  flex:1;
  align-items:center;

`;

export const TopBox = styled.View`
  padding-bottom: 15px;
  width: 100%;
  background: #47AF50;
  justify-content: center;
  margin-bottom: 10px;
`;

export const BoxWhite = styled.View`
  flex-direction: column;
  height: auto;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  background: #fff;

`;

export const BoxButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

export const BoxData = styled.View`
  align-items: center;
  margin: 10px 10px;
`;

export const PhotoContainer = styled.View`
  height: 116px;
  width: 116px;
  border-radius: 200px;
  margin: 0 0 0 20px;
  border : 1px solid rgba(0, 0, 0, 0.2);
  background: #ddd;
`;

export const Photo = styled.Image`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const NameContainer = styled.View`
  height: auto;
  padding: 0 10px;
  justify-content: center;
  border-radius: 10px;
`;

export const TextName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  color:#fff;
`;

export const TitleFavorite = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color:#1f6325;

`;

export const Favorite = styled.View`
  width: 90%;
  padding: 20px 20px;
  background: #fff;
  flex-direction: column;
  align-items: center;
  border : 1px solid rgba(0, 0, 0, 0.1);
`;


