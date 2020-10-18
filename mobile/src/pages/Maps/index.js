import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Alert } from 'react-native';

import SyncStorage from 'sync-storage';

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Button from '../../components/Button'

import api from '../../services/api';

import {
  BoxBottons, PointLocation, CalloutContainer, TextNameBold,
  Subtitle, TextInfo, TextMore, SearchInput
} from './styles'

export default function Maps({ navigation: { navigate } }) {
  const [points, setPoints] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    const myLocation = SyncStorage.get('location_currentRegion');

    if(!myLocation) {
      Alert.alert('Aviso', 'Aguarde enquanto sua posição é encontrada no maps');

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
    } else {
      setCurrentRegion(myLocation);
      loadPoints();
    }
  }, []);

  useEffect(() => {
    SyncStorage.set('location_currentRegion', currentRegion);
  }, [currentRegion]);

  async function initialPosition() {
    
  }

  async function searchInput() {
    Alert.prompt(
      "Pesquisa por materiais",
      "Informe quais materiais você tem",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Pesquisar",
          onPress: materials => loadPointsByMaterials(materials)
        }
      ],
      "plain-text"
    );
  }

  async function loadPoints() {
    const response = await api.get('/collectors');

    setPoints(response.data);
  }

  async function loadPointsByMaterials(materials) {
    const response = await api.post('/search', { materials });

    setPoints(response.data);
  }

  return (
    <>
      <MapView 
        initialRegion={currentRegion} style={{ flex: 1 }} 
      >
        <Marker
          coordinate={currentRegion} >
            
          <Callout onPress={() => navigate('Profile')}>
            <CalloutContainer >
              <TextNameBold> Você </TextNameBold>

              <TextInfo>
                Toque para ver seu perfil
              </TextInfo>
            </CalloutContainer>
          </Callout>
        </Marker>

        {points.map(point => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }} >

            {point.avatar && <PointLocation source={{uri: point.avatar.url}} />}

            <Callout onPress={() => navigate('Company', point)}>
              <CalloutContainer >
                <TextNameBold> {point.name} </TextNameBold>

                <TextInfo>
                  <Subtitle>Entidade:</Subtitle> {point.entity}
                </TextInfo>

                <TextInfo> 
                  <Subtitle>Endereço:</Subtitle> {point.logradouro}, {point.bairro}, Nº {point.numero}, {point.localidade}, {point.uf} 
                </TextInfo>

                <TextInfo>
                  <Subtitle>Materiais:</Subtitle> {point.materials}
                </TextInfo>

                <TextMore>
                  Ver mais
                </TextMore>

              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <BoxBottons>
        <Button 
          icon="magnifier" 
          cor="#fff" 
          tamanho={24}
          onPress={searchInput}
        >
          Pesquisar
        </Button>

        <Button 
          icon="magnifier-remove" 
          cor="#fff" 
          tamanho={24}
          onPress={loadPoints}
        >
          Limpar
        </Button>

        <Button icon="location-pin" cor="#fff" tamanho={24} onPress={initialPosition}>
          Localização
        </Button>

        <Button
          icon="user"
          cor="#fff"
          tamanho={24}
          onPress={() => navigate('Profile')}
        >
          Perfil
        </Button>
      </BoxBottons>
    </>
  )
}
