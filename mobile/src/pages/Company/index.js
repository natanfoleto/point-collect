import React, { useState, useEffect } from 'react';
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native';

import SyncStorage from 'sync-storage';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TopBox, Photo, DataCompany, CompanyName, FlatContainer,
  Title, Text, Contacts, ButtonContacts, PlotRoute, ButtonRoute
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function Profile({ navigation, route }) {
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
  }

  return (
    <>
      <Container>
        <Header handleNavigation={navigation.goBack} cor={'#47AF50'} />

        <FlatList
          data={[1]}
          keyExtractor={company => String(company)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <>
              <FlatContainer>
                <TopBox >
                  {point.avatar && <Photo source={{ uri: point.avatar.url }} />}
                </TopBox>

                <DataCompany>
                  <CompanyName>
                    {point.name}
                  </CompanyName>

                  <Title>
                    Endereço
                  </Title>

                  <Text> Morro Agudo, São Paulo </Text>
                  <Text> Rua Antonio Belem, Jardim Carlifornia </Text>
                  <Text> Nº 177 </Text>

                  <Text> {point.materials}</Text>

                  <PlotRoute>
                    <Text> Rotas disponíveis até o local</Text>

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
            </>
          )}
        />          
      </Container>
    </>
  )
}