import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

import logo from '../../assets/logo3.png';

export default function Login() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function navigateToMaps(){
    navigation.navigate('Maps')
  }


  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHome}>
          <Feather name='arrow-left' size='35' color='#4BCB56' />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>

          <View style={styles.logo}>
            <Image source={logo} />
          </View>

          <View >

            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />

            <TouchableOpacity style={styles.btnCadastrar} onPress={navigateToMaps}>
              <Text style={styles.textCadastrar}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        

      </View>
    </>

  )
}