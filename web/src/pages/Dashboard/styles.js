import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 80%;
  margin: 30px auto 0 auto;
  padding: 30px 40px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  h1 {
    font-size: 22px;
    margin: 0 0 15px 0;
  }
`;

export const Dados = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Menu = styled.div`
  display: flex;
  margin-bottom: 15px;

  @media (max-width: 865px) {
    justify-content: center;
  }

  button {
    outline: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px;

    &:hover {
      background: ${darken(0.08, '#1E9E76')};
      color: white;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`;

export const CardData = styled.div`
  padding: 20px;
  height: auto;
  min-height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  strong {
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    margin: 0 0 2px 20px;
  }

  &:hover {
    transition: 0.5s;
    background: linear-gradient(-360deg, #27F260, #1C897C);
    color: white;
  }
`;

