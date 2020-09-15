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
  height: auto;
  padding-bottom: 15px;
  width: 100%;
  background: #47AF50;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
`;

export const BoxWhite = styled.View`
  flex-direction: column;
  height: auto;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
`;

export const BoxButton = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

export const BoxData = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 25px 25px 25px 25px;
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
  padding: 10px 10px 10px 10px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  margin: 0 10px 0 10px;
`;

export const TextName = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const Favorite = styled.View`
  height: auto;
  width: 90%;
  padding: 20px 20px 20px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;

export const TitleFavorite = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;
