import React from 'react';

import {ContainerHeader } from './styles';

import ButtonBar from '../ButtonBar';

export default function Header({ cor, icon, handleNavigation, ...rest}) {
  return (
    <ContainerHeader {...rest}>
      <ButtonBar onPress={handleNavigation} icon="arrow-back" cor={cor}/>
    </ContainerHeader>
  );
};