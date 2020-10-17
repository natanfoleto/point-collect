import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import CardFavorite from '../../components/CardFavorite';

import SyncStorage from 'sync-storage';

import Image from '../../assets/avatar.png';

import {
  Container, TopBox, NameContainer, TextName, Photo, 
  BoxData, TitleFavorite, HeaderProfile, ButtonEdit, 
  ButtonLogout, ButtonEditText, ButtonLogoutText, 
  Info, Buttons, Favorite, Subtitle
} from './styles';

export default function Profile({ navigation }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const profile = SyncStorage.get('auth_user');

    setProfile(profile);
  }, []);

  function handleLogout() {
    SyncStorage.remove('auth_user');

    navigation.reset({
      routes: [{ name: 'Home' }],
    });
  }

  function handleEdit() {
    navigation.navigate('EditProfile');
  }

  return (
    <>
      <Container>
        <HeaderProfile handleNavigation={() => { navigation.navigate('Maps') }} />

        <TopBox >
          <BoxData>
            <Info>

              <Photo source={Image} />

              <NameContainer>
                <TextName>
                  {profile && profile.name}
                </TextName>
              </NameContainer>
            </Info>

            <Buttons>
              <ButtonEdit onPress={handleEdit} >
                <ButtonEditText> Editar </ButtonEditText>
              </ButtonEdit>

              <ButtonLogout onPress={handleLogout} >
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