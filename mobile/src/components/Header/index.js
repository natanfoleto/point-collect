import React from 'react';
import PropTypes from 'prop-types';

import {ContainerHeader } from './styles';

import ButtonBar from '../ButtonBar';

export default function Header({ icon, handleNavigation, ...rest}) {
  return (
    <ContainerHeader {...rest}>
      <ButtonBar onPress={handleNavigation} icon="arrow-back" cor="#fff"/>
    </ContainerHeader>
  );
};