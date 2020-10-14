import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import ButtonBar from '../../components/ButtonBar'

import api from '../../services/api';

import logoCompany from '../../assets/logo.png'

import {
  BoxBottons, PointLocation, CalloutContainer, TextNameBold,
  TextAddress, SearchInput
} from './styles'

import './styles';

export default function Maps({ navigation }) {
  const [points, setPoints] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [userCoords, setUserCoords] = useState([]);

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
    loadPoints();
  }, []);

  async function initialPosition() {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      setUserCoords({
        lat: coords.latitude,
        long: coords.longitude
      })
    }
  }

  async function loadPoints() {
    const response = await api.get('/collectors');

    setPoints(response.data);
  }


  return (
    <>


      <MapView initialRegion={currentRegion} style={{ flex: 1 }} >

        {points.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }} >

            <PointLocation source={{uri: point.avatar.url}} />

            <Callout onPress={() => { navigation.navigate('Company') }}>
              <CalloutContainer >
                <TextNameBold> cu </TextNameBold>
                <TextAddress>
                  Morro Agudo, São Paulo
                  Rua Antonio Belem, Jardim California
                  n° 177
              </TextAddress>


              </CalloutContainer>
            </Callout>
          </Marker>
        ))}


      </MapView>

      <BoxBottons>
        <ButtonBar icon="search" cor="#fff" tamanho={30}>
          Pesquisar
        </ButtonBar>

        <ButtonBar icon="place" cor="#fff" tamanho={30}>
          Localização
        </ButtonBar>

        <ButtonBar
          icon="person"
          cor="#fff"
          tamanho={30}
          onPress={() => { navigation.navigate('Profile') }}
        >
          Perfil
        </ButtonBar>
      </BoxBottons>

    </>


  )
}