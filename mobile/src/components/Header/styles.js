import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const ContainerHeader = styled.View`
  align-items: flex-start;
  width: 100%;
  background: #47AF50;
  padding-top: 10px ;
  padding-left: 5px ;
  margin-top: ${Constants.statusBarHeight + 5};
`;
