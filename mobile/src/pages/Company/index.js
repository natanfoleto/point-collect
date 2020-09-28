import React from 'react';
import * as MailComposer from 'expo-mail-composer'
import {Linking} from 'react-native';

import Header from '../../components/Header';

import {
  Container, TopBox, PhotoContainer, Photo, DataCompany,
  CompanyName, CompanyAddress, Text, WrapperComposer, ButtonComposer
} from './styles';

export default function Profile({ navigation }) {

  const message = 'Olá empresa de reciclagem, queria mais informações.'

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'Compania',
      recipients: ['vinicius.faleiros@hotmail.com'],
      body: message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5516992904006&text=${message}`);
  }
  return (
    <>
      <Container>
        <Header handleNavigation={navigation.goBack} cor={'#47AF50'} />

        <TopBox >
          <PhotoContainer >
            <Photo source={{ uri: 'https://i.ytimg.com/vi/Iyi4boL5Ta8/hqdefault.jpg' }} />
          </PhotoContainer>
        </TopBox>

        <DataCompany>
          <CompanyName>
            Nome Empresa
          </CompanyName>

          <CompanyAddress>
            Endereço
          </CompanyAddress>

          <Text> Morro Agudo, São Paulo </Text>
          <Text> Rua Antonio Belem, Jardim Carlifornia </Text>
          <Text> Nº 177 </Text>

        </DataCompany>

        <WrapperComposer>
          <ButtonComposer onPress={sendWhatsapp}>
            WhatsApp
          </ButtonComposer>

          <ButtonComposer onPress={sendMail}>
            Email
          </ButtonComposer>

        </WrapperComposer>


      </Container>

    </>
  )
}