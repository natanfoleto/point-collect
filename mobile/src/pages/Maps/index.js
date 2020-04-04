import React, { useState, useEffect, useRef } from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, Keyboard, Animated } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync, geocodeAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles'

export default function Maps() {
  const [collectors, setCollectors] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [inputEnabled, setInputEnabled] = useState(false);

  const fadeAnimWidth = useRef(new Animated.Value(0)).current;
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

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

  async function loadCollectors() {
    const response = await api.get('collectors');

    setCollectors(response.data);
  }

  async function getRegionLocation() {
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

  async function getRegionName() {
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

  const fadeInWidth = () => {
    Animated.timing(fadeAnimWidth, {
      toValue: 270,
      duration: 500
    }).start();

    fadeInOpacity();
  };
  const fadeOutWidth = () => {
    Animated.timing(fadeAnimWidth, {
      toValue: 0,
      duration: 500
    }).start();

    fadeOutOpacity();
  };
  const fadeInOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 500
    }).start();
  };
  const fadeOutOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: 0,
      duration: 300
    }).start();
  };

  function showHideInput() {
    if (!inputEnabled) {
      fadeInWidth();

      setInputEnabled(true);
    } else {
      fadeOutWidth();

      setInputEnabled(false);
      Keyboard.dismiss();
    }
  }

  if (!currentRegion) {
    return null;
  }

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
          <Image style={styles.marker} />
          <Callout>
            <View style={styles.calloutUser}>
              <Text style={styles.textYou}>Você está aqui!</Text>
              <Text style={styles.textPoint}>O local mais próximo do seu endereço é uma Cooperativa a 34,2km</Text>
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
            <Image style={styles.markerCollector} source={ {uri: 'https://avatars0.githubusercontent.com/u/39577730?s=400&u=a7f7b5fcc2da2df8dece626fb456746147df9261&v=4'} } />
            
            <Callout style={styles.calloutCollector}>

              <View style={styles.calloutInfo}>
                <Text style={styles.textName}>{collector.name}</Text>
                
                <Text style={styles.text}>Avenida Paulo Castor Gomes, 0 - Rural Barretos - SP</Text>
                
                <Text style={styles.text}>Telefone: 
                  <Text style={styles.textTelephone}> {collector.telephone}</Text> 
                </Text>
                
                <Text style={styles.text}>E-mail:
                  <Text style={styles.textEmail}> {collector.email}</Text> 
                </Text>
              </View>

              <View style={styles.calloutButton}>
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
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={showHideInput}
        >
          <MaterialIcons name="search" size={20} color="#000" />
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.fadingContainer,
            {
              width: fadeAnimWidth,
              opacity: fadeAnimOpacity
            },
          ]}
        >
          <TextInput 
            style={styles.searchInput}
            placeholder="O que você quer reciclar...?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            onSubmitEditing={fadeOutWidth}
          />
        </Animated.View> 
      </View>

      <View style={styles.initForm}>
        <TouchableOpacity 
          style={styles.initButton}
          onPress={loadCollectors}
        >
          <Text style={styles.textInit}>
            INICIAR
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sideBar}>
        <TouchableOpacity 
          style={styles.sideBarButton}
        >
          <MaterialIcons name="gps-fixed" size={36} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sideBarButton}
        >
          <MaterialIcons name="widgets" size={36} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sideBarButton}
        >
          <MaterialIcons name="account-circle" size={36} color="#333" />
        </TouchableOpacity>
      </View>
    </>
  );
}