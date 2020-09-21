import React from 'react';
import {FlatList} from 'react-native';

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
        <HeaderProfile handleNavigation={navigation.goBack}  />

        <TopBox >
          <BoxWhite>
            <BoxButton>
              <ButtonBar icon="edit" cor="#4F4F4F" tamanho={25} onPress={() => navigation.navigate('EditProfile')}/>
            </BoxButton>

            <BoxData>
              <PhotoContainer >
                <Photo source={{ uri: 'https://avatars0.githubusercontent.com/u/42284565?s=60&v=4' }} />
              </PhotoContainer>

              <NameContainer >
                <TextName>
                  Vinicius Faleiros
                </TextName>
              </NameContainer>
            </BoxData>
          </BoxWhite>
        </TopBox>

        <Favorite>
          <TitleFavorite>
            Locais Favoritos
          </TitleFavorite>

          <FlatList
            data={[1,2,3,4]}
            renderItem={() => <CardFavorite />}
          />




        </Favorite>

      </Container>

    </>
  )
}