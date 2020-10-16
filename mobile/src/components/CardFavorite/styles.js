import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  padding: 15px 15px 5px 15px;
  margin-bottom: 15px;
  margin-right: 15px;
  background: #fff;
  border-radius: 4px;
`;

export const BoxButton = styled.View` 
  margin-bottom: 10px;
`;

export const CompanyImage = styled.Image`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
`;

export const CompanyName = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #1f6325;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Info = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const InfoText = styled.Text`
  color: #1f6325;
  margin-right: 5px;
`;
