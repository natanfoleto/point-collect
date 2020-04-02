import React, { useState, useEffect } from 'react'
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

export default function Maps() {
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
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -20.697764, longitude: -48.416833 }}>
        <Image style={styles.marker} />
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.be}>Você está aqui!</Text>
            <Text style={styles.point}>O local mais próximo do seu endereço é uma Cooperativa a 34,2km</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
    <View style={styles.searchForm}>
      <TextInput 
        style={styles.searchInput}
        placeholder="Buscar pontos por cidade..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false} 
      />

      <TouchableOpacity style={styles.loadButton}>
        <MaterialIcons name="my-location" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
    </>
  );
}