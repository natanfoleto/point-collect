import React from 'react';

import ButtonBar from '../../components/ButtonBar';
import CardFavorite from '../../components/CardFavorite';

import {
  Container, TopBox, PhotoContainer, NameContainer, TextName,
  Photo, BoxWhite, BoxData, BoxButton, Favorite, TitleFavorite, HeaderProfile
} from './styles';

export default function Profile({ navigation }) {

  return (
    <>
      <Container>
        <HeaderProfile handleNavigation={navigation.goBack} cor="#fff" />

        <TopBox >
          <BoxWhite>
            <BoxButton>
              <ButtonBar icon="edit" onPress={() => navigation.navigate('EditProfile')}/>
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