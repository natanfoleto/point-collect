import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const ContainerHeader = styled.View`
  align-items: flex-start;
  width: 100%;
  padding: 10px 5px;
  margin-top: ${Constants.statusBarHeight + 1};
`;
