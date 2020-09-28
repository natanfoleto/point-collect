import React,{useState} from 'react';
import {Image} from 'react-native';
import Lottie from 'lottie-react-native';

import mail from '../../assets/mail.json';

import Header from '../../components/Header';

import { PasswordInput, Container, SubmitButton, Form, ContainerLottie} from './styles';

export default function ResetPassword({ navigation }) {

  const [play, setPlay] = useState(true)

  function handlePlay(){
    setPlay(!play);
  }

  return (
    <>

      <Header handleNavigation={navigation.goBack} cor="#47AF50"/>

      <Container>

        {/*<Image source={logo} /> */}

        <ContainerLottie>
         <Lottie resizeMode="contain" source={mail} pause={play}/>
        </ContainerLottie>


        <Form>
          <PasswordInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail para recuperação"
            returnKeyType="send"
          />

          <SubmitButton onPress={handlePlay}>
            ENVIAR
          </SubmitButton>
        </Form>




      </Container>




    </>
  )
}