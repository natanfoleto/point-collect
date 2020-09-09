import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex:1;
  align-items:center;
`;

export const TopBox = styled.View`
  width: 100%;
  background: #47AF50;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
`;

export const PhotoContainer = styled.View`
  height: 180px;
  width: 100%;
  background: #ddd;
`;

export const Photo = styled.Image`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const DataCompany = styled.View`
  height: auto;
  width: 100%;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
`;

export const CompanyName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CompanyAddress = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
