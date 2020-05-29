import React, {useRef} from 'react';
import {Image } from 'react-native';


import logo from '../../assets/logo.png';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';




export default function Home({ navigation }) {

  const passwordRef = useRef();

  function handleSubmit(){

  }

  return (
    <>
      <Container>

        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Entrar </SubmitButton>

        </Form>

        <SignLink onPress={() => {navigation.navigate('SignUp')}} >
          <SignLinkText> Cadastre-se </SignLinkText>
        </SignLink>
      </Container>
    </>

  );
}