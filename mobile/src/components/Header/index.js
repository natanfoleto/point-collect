import React from 'react';

import {ContainerHeader } from './styles';

import ButtonBar from '../ButtonBar';

export default function Header({ handleNavigation, icon, cor,...rest}) {
  return (
    <ContainerHeader {...rest}>
      <ButtonBar onPress={handleNavigation} icon="arrow-back" cor={cor} tamanho={30}/>
    </ContainerHeader>
  );
};

