import React from 'react';

import Header from '../../components/Header';

import {
  Container, TopBox, PhotoContainer, Photo, DataCompany,
  CompanyName, CompanyAddress, Text, WrapperComposer, ButtonComposer
} from './styles';

export default function Profile({ navigation }) {

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
          <ButtonComposer>
            WhatsApp
          </ButtonComposer>

          <ButtonComposer>
            Email
          </ButtonComposer>

        </WrapperComposer>


      </Container>

    </>
  )
}