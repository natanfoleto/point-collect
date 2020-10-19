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

        <Content>
          <Title>
            {activie.title}
          </Title>

          <Card>
            <TitleCard>
              Local
            </TitleCard>

            <Text>
              {activie.data && activie.data.name}
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
          
        </Content>
      </Container>
    </>
  )
}