import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px 20px;
  background: #f9f9f9;
  border-radius: 4px;
  border: solid 1px rgba(000, 000, 000, 0.1);
  border-radius: 10px;
`;

export const BoxButton = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  margin-right: 4px;
`;

export const CompanyImage = styled.Image`
  width: 90%;
  height: 60px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const CompanyName = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #000;

`;