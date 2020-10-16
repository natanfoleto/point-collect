import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ButtonBar from '../../components/ButtonBar';
import CardFavorite from '../../components/CardFavorite';

import SyncStorage from 'sync-storage';

import Image from '../../assets/avatar.png';

import {
  Container, TopBox, PhotoContainer, NameContainer, TextName,
  Photo, BoxData, TitleFavorite, HeaderProfile,
  ButtonEdit, ButtonLogout, ButtonEditText, ButtonLogoutText, 
  Info, Buttons, Favorite, Subtitle
} from './styles';

export default function Profile({ navigation }) {
  const [profile, setProfile] = useState({});

  useState(async () => {
    const profile = await SyncStorage.get('auth_user');

    setProfile(profile);
  }, []);

  return (
    <>
      <Container>
        <HeaderProfile handleNavigation={navigation.goBack} />

        <TopBox >
          <BoxData>
            <Info>

              <Photo source={Image} />

              <NameContainer>
                <TextName>
                  Natan Foleto
                </TextName>
              </NameContainer>
            </Info>

            <Buttons>
              <ButtonEdit onPress={() => { navigation.navigate('EditProfile') }} >
                <ButtonEditText> Editar </ButtonEditText>
              </ButtonEdit>

              <ButtonLogout onPress={() => { navigation.navigate('Home') }} >
                <ButtonLogoutText> Logout </ButtonLogoutText>
              </ButtonLogout>
            </Buttons>
            
          </BoxData>   
        </TopBox>

        <Favorite>
          <TitleFavorite>
            Locais Favoritos
          </TitleFavorite>

          <Subtitle>
            Deslize para direita e veja seus favoritos
          </Subtitle>

          <FlatList
            horizontal
            data={[1,2,3,4]}
            keyExtractor={company => String(company)}
            showsVerticalScrollIndicator={false}
            renderItem={() => <CardFavorite /> }
          />
        </Favorite>
      </Container>
    </>
  )
}