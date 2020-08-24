import React from 'react';

import ButtonBar from '../../components/ButtonBar'

import {Container, Text, BoxBottons} from './styles'

export default function Maps({navigation}){
  return (
    <Container>

      <BoxBottons>
        <ButtonBar icon="search">
          <Text> Pesquisar </Text>
        </ButtonBar>

        <ButtonBar icon="favorite">
          <Text> Favoritos </Text>
        </ButtonBar>

        <ButtonBar icon="place">
          <Text> Localização</Text>
        </ButtonBar>

        <ButtonBar icon="person" onPress={() => {navigation.navigate('Profile')}}>
          <Text> Perfil </Text>
        </ButtonBar>
      </BoxBottons>

    </Container>

  )
}