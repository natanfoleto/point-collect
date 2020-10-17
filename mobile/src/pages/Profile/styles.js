import styled from 'styled-components/native';

import Header from '../../components/Header';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f6f6f6;
`;

export const HeaderProfile = styled(Header)`
  background: #47AF50;
`;

export const TopBox = styled.View`
  padding-bottom: 15px;
  width: 100%;
  height: 25%;
  background: #47AF50;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
  margin-bottom: 120px;
`;

export const BoxData = styled.View`
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
`;

export const Photo = styled.Image`
  height: 116px;
  width: 116px;
  border-radius: 15px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.5);
`;

export const NameContainer = styled.View`
  height: auto;
  width: 60%;
  padding: 0 10px;
  border-radius: 10px;
`;

export const TextName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: #444;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  padding: 15px;
  width: 48%;
  align-items: center;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ButtonLogout = styled.TouchableOpacity`
  padding: 15px;
  width: 48%;
  align-items: center;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #47AF50;
`;

export const ButtonEditText = styled.Text`
  color: rgba(000,000,000, 0.4);
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonLogoutText = styled.Text`
  color: #eee;
  font-weight: bold;
  font-size: 16px;
`;

export const Subtitle = styled.Text`
  color:#555;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Favorite = styled.View`
  width: 80%;
  flex-direction: column;
`;

export const TitleFavorite = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:#555;
`;
