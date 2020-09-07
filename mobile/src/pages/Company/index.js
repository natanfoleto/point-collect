import React from 'react';

import Header from '../../components/Header';
import ButtonBar from '../../components/ButtonBar';
import CardFavorite from '../../components/CardFavorite';

import {
  Container, TopBox, PhotoContainer,Photo, DataCompany, 
  CompanyName, CompanyAddress, Text
} from './styles';

export default function Profile({ navigation }) {

  return (
    <>
      <Container>
        <Header handleNavigation={navigation.goBack} />

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

      </Container>

    </>
  )
}