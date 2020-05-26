import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

import logo from '../../assets/logo3.png';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigation = useNavigation();

  function handleSubmit() {

  }

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function navigateToMaps() {
    navigation.navigate('Maps')
  }

  return (
    <>
      <View style={styles.statusBar} />

      <TouchableOpacity
        style={styles.buttonBack}
        onPress={navigateToHome}
      >
        <MaterialIcons name="keyboard-backspace" size={35} color="#4BCB56" />
      </TouchableOpacity>

      <View style={styles.container}>

        <View>
          <Image source={logo} />
        </View>

        <View >

          <TextInput
            style={styles.input}
            placeholder="Email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={handleSubmit}
          >
            <Text style={styles.textLogin}>LOGIN</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>

  )
}