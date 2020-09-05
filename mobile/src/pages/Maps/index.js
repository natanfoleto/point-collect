import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import ButtonBar from '../../components/ButtonBar'

import logoCompany from '../../assets/company.png'


import {
  Container,Text, BoxBottons, PointLocation, CalloutContainer, TextNameBold,
  TextAddress, SearchInput
}
  from './styles'

import './styles';

export default function Maps({ navigation }) {


  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        })

      }

    }
    loadInitialPosition();
  }, []);

  async function initialPosition() {
    if (granted) {
      const coordenadas = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
    }
  }


  return (
    <>

      <MapView initialRegion={currentRegion} style={{ flex: 1 }} >

        <Marker coordinate={{ latitude: -20.7305509, longitude: -48.0491994 }} >

          <PointLocation source={logoCompany} />

          <Callout onPress={() => { navigation.navigate('Company') }}>
            <CalloutContainer >
              <TextNameBold> Nome empresa </TextNameBold>

              <TextAddress>
                Morro Agudo, São Paulo
                Rua Antonio Belem, Jardim California
                n° 177
              </TextAddress>
            </CalloutContainer>
          </Callout>
        </Marker>

      </MapView>

      <BoxBottons>
        <ButtonBar icon="search" cor="#fff">
          <Text> Pesquisar </Text>
        </ButtonBar>

        <ButtonBar icon="favorite" cor="#fff">
          <Text> Favoritos </Text>
        </ButtonBar>

        <ButtonBar icon="place" cor="#fff" >
          <Text> Localização</Text>
        </ButtonBar>

        <ButtonBar icon="person" cor="#fff" onPress={() => { navigation.navigate('Profile') }}>
          <Text> Perfil </Text>
        </ButtonBar>
      </BoxBottons>

    </>


  )
}