import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Alert } from 'react-native';

import SyncStorage from 'sync-storage';

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import Button from '../../components/Button'

import api from '../../services/api';
import { connect, disconnect, subscribeToNewPoint } from '../../services/socket';

import {
  BoxBottons, PointLocation, CalloutContainer, TextNameBold,
  Subtitle, TextInfo, TextMore
} from './styles'

export default function Maps({ navigation: { navigate } }) {
  const [points, setPoints] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  const mapView = React.createRef();

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
          });
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

  useEffect(() => {
    subscribeToNewPoint(point => setPoints([...points, point]));
  }, [points]);

  async function initialPosition() {
    mapView.current.animateToRegion({
      latitude: currentRegion.latitude,
      longitude: currentRegion.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }, 1000);
  }

  async function setupWebSocket() {
    disconnect();
    connect();
  }

  async function loadPoints() {
    const response = await api.get('/collectors');
    console.log(response.data);

    setPoints(response.data);
    setupWebSocket();
  }

  async function loadPointsByMaterials(materials) {
    if (materials === "") {
      Alert.alert('Erro na pesquisa', 'Você precisa informar pelo menos um tipo de material');
    } else {
      const response = await api.post('/search', { materials });
  
      setPoints(response.data);
    }
  }

  async function searchInput() {
    Alert.prompt(
      'Pesquisa por materiais',
      `Clique em "Ajuda" caso esteja tendo problemas com a pesquisa`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Ajuda",
          onPress: () => Alert.alert(
            'Ajuda de pesquisa', 
            `Você pode pesquisar por:
            \nPlásticos, Garrafas, Potes, Tubos, Canos, Brinquedos,Sacos, Sacolas, 
            Isopor, Alumínio, Molas, Latas, Papéis, Vidro, Outros
            \nLembre-se de escrever os materiais com as iniciais maiúsculas, como mostra o exemplo acima.`
          )
        },
        {
          text: "Pesquisar",
          onPress: materials => loadPointsByMaterials(materials)
        }
      ],
      "plain-text"
    );
  }

  return (
    <>
      <MapView 
        initialRegion={currentRegion}
        ref={mapView}
        style={{ flex: 1 }} 
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

        <Button 
          icon="location-pin" 
          cor="#fff" 
          tamanho={24} 
          onPress={initialPosition}
        >
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
