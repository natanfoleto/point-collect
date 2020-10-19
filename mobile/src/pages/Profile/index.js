import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SyncStorage from 'sync-storage';

import Image from '../../assets/avatar.png';

import {
  Container, TopBox, NameContainer, TextName, Photo,
  BoxData, HeaderProfile, Button, ButtonText, Info, Buttons,
  Activies, Activie, Subtitle, SubtitleActivies, TitleActivies,
  TitleActivie, PhotoActivie, ActivieData
} from './styles';

export default function Profile({ navigation }) {
  const [profile, setProfile] = useState({});
  const [activies, setActivies] = useState([]);

  useEffect(() => {
    const profile = SyncStorage.get('auth_user');
    const activies = SyncStorage.get('activies');

    setProfile(profile);
    setActivies(activies);
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
              <Button onPress={handleEdit} >
                <ButtonText> Editar </ButtonText>
              </Button>

              <Button onPress={handleLogout} >
                <ButtonText> Logout </ButtonText>
              </Button>
            </Buttons>

          </BoxData>
        </TopBox>

        <Activies>
          <TitleActivies>
            Atividades recentes
          </TitleActivies>

          <SubtitleActivies>
            Atividades realizadas durante este acesso
          </SubtitleActivies>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {activies && activies.map(activie => (
              <Activie
                key={activie.date}
                onPress={() => navigation.navigate('Activie', activie)}
              >
                <PhotoActivie>
                  <Icon
                    name="map"
                    size={26}
                    color="#555"
                  />
                </PhotoActivie>

                <ActivieData>
                  <TitleActivie>
                    {activie.title}
                  </TitleActivie>

                  <Subtitle>
                    Local: {activie.data.name}
                  </Subtitle>
                </ActivieData>

                <Icon
                  style={{ position: "absolute", right: 5 }}
                  name="chevron-right"
                  size={28}
                />

                </Activie>
            ))}
          </ScrollView>

        </Activies>
      </Container>
    </>
  )
}