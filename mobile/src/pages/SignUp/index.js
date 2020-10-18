import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';

import SyncStorage from 'sync-storage';

import Header from '../../components/Header';

import logo from '../../assets/logo.png';

import api from '../../services/api';

import { Container, Form, FormInput, SubmitButton} from './styles';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleRegister() {
    const internet = SyncStorage.get('internet_connection');

    if (internet) {
      Alert.alert('Você está desconectado', 'Tente novamente mais tarde!');
    } else {
      if (name === '' || email === '' || password === '' || confirmPassword === '') {
        Alert.alert('Falha na validação', 'Preencha todos os campos');
      } else {
        if (password !== confirmPassword) {
          Alert.alert('Falha no cadastro', 'As senhas não conferem');
        } else {
          const response = await api.post('/users', { name, email, password });
    
          if (response.data.error === 0) {
            if (response.data.user) {
              Alert.alert('Sucesso', 'Cadastro feito com sucesso');

              navigation.navigate('Home');
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
      <Header handleNavigation={navigation.goBack} cor="#47AF50"/>

      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confirmPasswordRef}
            return="handleRegister"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleRegister}> 
            CADASTRAR 
          </SubmitButton>

        </Form>

      </Container>
    </>

  );
}