import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  flex:1;
  align-items: center;
`;

export const FlatContainer = styled.View`
  align-items: center;
`;

export const TopBox = styled.View`
  width: 100%;
  background: #47AF50;
  justify-content: center;
  align-items: flex-end;
`;

export const Photo = styled.Image`
  height: 180px;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const DataCompany = styled.View`
  height: auto;
  width: 100%;
  padding: 20px 20px;
  flex-direction: column;
  align-items: center;

`;

export const CompanyName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

export const ButtonRoute = styled.TouchableOpacity`
  margin-top: 10px;
  height: 50px;
  width: 50px;
  background: #0069FF;
  align-items: center;
  border-radius: 5px;
`;

export const PlotRoute = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Contacts = styled.View`
  padding: 0 30px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const ButtonContacts = styled(Button)`
  background: #47AF50;
  padding: 10px 10px;
  margin: 0 10px 0 10px;
  width: 130px;
`;
