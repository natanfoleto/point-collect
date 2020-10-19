import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import {
  Container, Content, Card, Title, TitleCard, Text
} from './styles';

export default function Activie({ navigation, route }) {
  const [activie, setActivie] = useState([]);

  useEffect(() => {
    setActivie(route.params);
  }, []);

  return (
    <>
      <Container>
        <Header handleNavigation={navigation.goBack} cor={'#47AF50'} />

        {activie && <Content>
          <Title>
            {activie.title}
          </Title>

          <Card>
            <TitleCard>
              {activie.data && activie.data.entity}
            </TitleCard>

            <Text>
              {activie.data && activie.data.name}
            </Text>
          </Card>

          <Card>
            <TitleCard>
              Endereço
            </TitleCard>

            <Text>
              {activie.data && activie.data.logradouro}, {activie.data && activie.data.numero}
            </Text>

            <Text>
              {activie.data && activie.data.bairro}
            </Text>

            <Text>
              {activie.data && activie.data.localidade}, {activie.data && activie.data.uf}
            </Text>

          </Card>

          <Card>
            <TitleCard>
              Data e hora
            </TitleCard>

            <Text>
              {activie.date}
            </Text>
          </Card>

        </Content>}
      </Container>
    </>
  )
}