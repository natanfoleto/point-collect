import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native'

import logo from '../../assets/logo3.png'

import styles from './styles'

export default function Home() {

  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  return (

    <SafeAreaView style={styles.container}>

      <Image source={logo} style={styles.logo} />

      <View>
        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={navigateToSignUp}
        >
          <Text style={styles.textCadastrar}> CADASTRE-SE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={navigateToLogin}
        >
          <Text style={styles.textLogin}> LOGIN </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}