import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';

import SyncStorage from 'sync-storage';

import logo from '../../assets/logo.png';

import ButtonBar from '../../components/ButtonBar';

import api from '../../services/api';

import {
  Container, FormInput, SignLink,
  SignLinkText, SubmitButton, FormRocket
}
  from './styles';

export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  async function handleSubmit() {
    const internet = SyncStorage.get('internet_connection');

    if (internet) {
      Alert.alert('Você está desconectado', 'Tente novamente mais tarde!');
    } else {
      if (email === '' || password === '') {
        Alert.alert('Falha na validação', 'Preencha todos os campos');
      } else {
        const response = await api.post('/sessions', { email, password });

        if (response.data) {
          if (response.data.collector) {
            Alert.alert('Falha no login', 'Usuário é um ponto de coleta');
          }

          if (response.data.user) {
            if (response.data.error === 0) {
              await SyncStorage.set('auth_user', response.data.user);
              await SyncStorage.set('auth_token', response.data.token);
                
              navigation.reset({
                routes: [{ name: 'Maps' }],
              });
            }
          }

          if (response.data.error === 1) {
            const msg = response.data.msg;

            Alert.alert('Falha no login', msg);
          }
        }
      }
    }
  }

  return (
    <>
      <Container>

        <Image source={logo} />

        <FormRocket>
          <FormInput
            id="email"
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            id="senha"
            secureTextEntry
            autoCorrect={false}
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          >
            {/* <ButtonBar 
              icon="remove-red-eye" 
              cor="#4BCB56" 
              tamanho={22} 
            /> */}
          </FormInput>


          <SubmitButton onPress={handleSubmit}>
            ENTRAR
          </SubmitButton>

        </FormRocket>


        <SignLink onPress={() => { navigation.navigate('SignUp') }} >
          <SignLinkText> Cadastre-se </SignLinkText>
        </SignLink>

        <SignLink onPress={() => { navigation.navigate('ResetPassword') }} >
          <SignLinkText> Esqueceu sua senha? </SignLinkText>
        </SignLink>
      </Container>
    </>

  );
}