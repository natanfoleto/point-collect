import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  align-items: center;
`;

export const Content = styled.View`
  height: auto;
  width: 100%;
  padding: 20px 20px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 10px;
  border-radius: 4px;
`;

export const TitleCard = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
`;
