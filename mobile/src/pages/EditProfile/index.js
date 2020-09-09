import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

export default function EditProfile({navigation}) {
  return (
    <>
      <Header handleNavigation={navigation.goBack} />
      <Container>

      </Container>
    </>
  );
}
