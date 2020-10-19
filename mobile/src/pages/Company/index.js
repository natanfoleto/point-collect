import React, { useState, useEffect } from 'react';
import * as MailComposer from 'expo-mail-composer'
import { Linking, ScrollView } from 'react-native';

import moment from 'moment';

import SyncStorage from 'sync-storage';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TopBox, Photo, DataCompany, CompanyName, FlatContainer,
  Title, Text, Contacts, ButtonContacts, PlotRoute, ButtonRoute
} from './styles';

export default function Company({ navigation, route }) {
  const [point, setPoint] = useState([]);

  useEffect(() => {
    setPoint(route.params);
  }, []);

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=55${point.whatsapp}&text=${''}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Compania',
      recipients: [`${point.email}`],
      body: '',
    })
  }

  function plotRoute() {
    const location = SyncStorage.get('location_currentRegion');

    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${point.latitude},${point.longitude}`
    );

    let dt = new Date();
    let date = moment(dt);

    date = date.format("DD/MM/YYYY HH:mm:ss");

    addActivies('Rota traçada', point, date);
  }

  function addActivies(title, data, date) {
    let activies = SyncStorage.get('activies');

    const newActivie = {
      title: title,
      data: data,
      date: date
    }

    activies.push(newActivie);

    SyncStorage.set('activies', activies);
  }

  return (
    <>
      <Container>
        <Header handleNavigation={navigation.goBack} cor={'#47AF50'} />

        <ScrollView showsVerticalScrollIndicator={false} >
          <FlatContainer>
            <TopBox >
              {point.avatar && <Photo source={{ uri: point.avatar.url }} />}
            </TopBox>

            <DataCompany>
              <CompanyName>
                {point.name}
              </CompanyName>

              <Title>
                Dados
              </Title>

              <Text> E-mail - {point.email} </Text>
              <Text> Telefone - {point.telephone} </Text>

              <Title>
                Endereço
              </Title>

              <Text> {point.localidade}, {point.uf} </Text>
              <Text> {point.logradouro}, {point.bairro} </Text>
              <Text> Nº {point.numero} </Text>

              <Title>
                Materiais trabalhados
              </Title>
              <Text> {point.materials}</Text>

              <PlotRoute>
                <Title>
                  Rotas
                </Title>
                <Text> Traçe uma rota até o local</Text>

                <ButtonRoute onPress={plotRoute}>
                  <Icon
                    name="subdirectory-arrow-right"
                    size={36}
                    color='#fff'
                    style={{ marginTop: 10 }}
                  />
                </ButtonRoute>

              </PlotRoute>
            </DataCompany>

            <Title>
              Contatos
            </Title>

            <Contacts>
              <ButtonContacts onPress={sendWhatsapp}>
                WhatsApp
              </ButtonContacts>

              <ButtonContacts onPress={sendMail}>
                Email
              </ButtonContacts>
            </Contacts>
          </FlatContainer>
        </ScrollView>
      </Container>
    </>
  )
}