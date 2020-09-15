import React from 'react';

import { Container, HeaderEditProfile } from './styles';

export default function EditProfile({navigation}) {
  return (
    <>
      <HeaderEditProfile handleNavigation={navigation.goBack} cor="#fff"/>
      <Container>

      </Container>
    </>
  );
}
