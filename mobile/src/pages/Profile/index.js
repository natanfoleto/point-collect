import React from 'react';
import { FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import ButtonBar from '../../components/ButtonBar';

import CardFavorite from '../../components/CardFavorite';

import {
  Container, TopBox, PhotoContainer, NameContainer, TextName,
  Photo, BoxWhite
} from './styles';

export default function Profile({ navigation }) {

  return (

    <>
      <Container>
        <Header handleNavigation={navigation.goBack} />

        <TopBox >

          <BoxWhite>
            <ButtonBar icon="edit" />

            <PhotoContainer >
              <Photo source={{ uri: 'https://avatars0.githubusercontent.com/u/42284565?s=60&v=4' }} />
            </PhotoContainer>

            <NameContainer >
              <TextName>
                Vinicius Faleiros
              </TextName>
            </NameContainer>
          </BoxWhite>
        </TopBox>

        <CardFavorite />

      </Container>

    </>
  )
}