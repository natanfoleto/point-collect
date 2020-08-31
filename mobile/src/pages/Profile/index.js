import React from 'react';
import {Image} from 'react-native';

import { Container, TopBox, PhotoContainer, NameContainer, TextName, Photo} from './styles';

export default function Profile({ navigation }) {

  return (
    <>
      <Container>

        <TopBox >
          <PhotoContainer >

          </PhotoContainer>
        </TopBox>

        <NameContainer >
          <TextName>
            Vinicius Faleiros
          </TextName>
        </NameContainer>


      </Container>

    </>
  )
}