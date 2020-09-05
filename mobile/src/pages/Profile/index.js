import React from 'react';
import { FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import ButtonBar from '../../components/ButtonBar';

import CardFavorite from '../../components/CardFavorite';

import {
  Container, TopBox, PhotoContainer, NameContainer, TextName,
  Photo, BoxWhite, BoxData, BoxButton, Favorite, TitleFavorite
} from './styles';

export default function Profile({ navigation }) {

  return (

    <>
      <Container>
        <Header handleNavigation={navigation.goBack} />

        <TopBox >

          <BoxWhite>
            <BoxButton>
              <ButtonBar icon="edit" />
            </BoxButton>

            <BoxData>
              <PhotoContainer >
                <Photo source={{ uri: 'https://avatars0.githubusercontent.com/u/42284565?s=60&v=4' }} />
              </PhotoContainer>

              <NameContainer >
                <TextName>
                  Vinicius Faleiros
                </TextName>

                <TextName>
                  vinicius@hotmail.com
                </TextName>
              </NameContainer>
            </BoxData>
          </BoxWhite>
        </TopBox>

        <Favorite>
          <TitleFavorite>
            Locais Favoritos
          </TitleFavorite>

          <CardFavorite />
        </Favorite>

      </Container>

    </>
  )
}