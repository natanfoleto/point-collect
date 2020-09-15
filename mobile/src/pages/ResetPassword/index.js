import React from 'react';
import {Image} from 'react-native';

import logo from '../../assets/logo.png';

import Header from '../../components/Header';

import { PasswordInput, Container, SubmitButton, Form } from './styles';

export default function ResetPassword({ navigation }) {
  return (
    <>

      <Header handleNavigation={navigation.goBack} cor="#47AF50"/>

      <Container>

        <Image source={logo} />


        <Form>
          <PasswordInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail para recuperação"
            returnKeyType="send"
          />

          <SubmitButton >
            ENVIAR
          </SubmitButton>
        </Form>




      </Container>




    </>
  )
}