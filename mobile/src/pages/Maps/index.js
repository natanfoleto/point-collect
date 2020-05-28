import React, { useState, useEffect, useRef } from 'react'
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync, geocodeAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles'

export default function Maps() {
  const [collectors, setCollectors] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  const inputSearch = useRef(null);

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
          longitudeDelta: 0.03
        });
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    async function loadCollectors() {
      const response = await api.get('collectors');

      setCollectors(response.data);
    }

    loadCollectors();
  }, []);

  async function getCoordsByAddress() {
      const coords = await geocodeAsync('Jaborandi');

      const [{ latitude, longitude }] = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      });

      console.log(latitude, longitude);
  }

  async function getLocationByCoords() {
    const { coords } = await getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const { latitude, longitude } = coords;

    const regionName = await reverseGeocodeAsync({
      latitude,
      longitude
    });

    console.log(regionName);
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  const focusSearchInput = () => {
      inputSearch.current.focus();
  };

  return (
    <>
      <View style={styles.statusBar}/>

      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
        rotateEnabled={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
      >
        <Marker coordinate={{ latitude: -20.697764, longitude: -48.416833 }}>
          <Image style={styles.userMarker} />
          <Callout>
            <View style={styles.userCallout}>
              <Text style={styles.userText}>Você está aqui!</Text>
              <Text style={styles.userPoint}>O local mais próximo do seu endereço é uma Cooperativa a 34,2km</Text>
            </View>
          </Callout>
        </Marker>

        {collectors.map(collector => (
          <Marker
            key={collector.id}
            coordinate={{
              latitude: Number(collector.latitude),
              longitude: Number(collector.longitude)
            }}
          >
            <Image style={styles.collectorMarker} source={ {uri: 'https://avatars0.githubusercontent.com/u/39577730?s=400&u=a7f7b5fcc2da2df8dece626fb456746147df9261&v=4'} } />

            <Callout style={styles.collectorCallout}>

              <View style={styles.collectorInfo}>
                <Text style={styles.collectorName}>{collector.name}</Text>

                <Text style={styles.collectorText}>Avenida Paulo Castor Gomes, 0 - Rural Barretos - SP</Text>

                <Text style={styles.collectorText}>Telefone:
                  <Text style={styles.collectorTelephne}> {collector.telephone}</Text>
                </Text>

                <Text style={styles.collectorText}>E-mail:
                  <Text style={styles.collectorEmail}> {collector.email}</Text>
                </Text>
              </View>

              <View style={styles.collectorButton}>
                <TouchableOpacity
                  style={styles.buttonSite}
                >
                  <MaterialIcons name="directions" size={36} color="#1E90FF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonRoute}
                >
                  <MaterialIcons name="language" size={30} color="#1E90FF" />
                </TouchableOpacity>
              </View>

            </Callout>

          </Marker>
        ))}

      </MapView>

       <View style={styles.searchForm}>
        <TextInput
          ref={inputSearch}
          style={styles.searchInput}
          placeholder="O que você quer reciclar...?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>



      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={focusSearchInput}
        >
          <MaterialIcons name="search" size={28} color="#E8E8E8" />
          <Text style={styles.textButton}>Pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarButton}
        >
          <MaterialIcons name="favorite" size={28} color="#E8E8E8" />
          <Text style={styles.textButton}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarButton}
        >
          <MaterialIcons name="place" size={28} color="#E8E8E8" />
          <Text style={styles.textButton}>Local</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarButton}
        >
          <MaterialIcons name="account-circle" size={28} color="#E8E8E8" />
          <Text style={styles.textButton}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}