import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

import logo from '../../assets/logo3.png'

export default function SignUp() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home')
  }

  return (
    <>
      <View style={styles.statusBar}/>
      
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

          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="Sobrenome" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" />
            <TextInput style={styles.input} placeholder="Confirma senha" />

            <TouchableOpacity style={styles.btnCadastrar}>
              <Text style={styles.textCadastrar}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>

      </View>
    </>
  );
}