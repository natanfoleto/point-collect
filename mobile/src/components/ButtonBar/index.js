import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, ContainerButton} from './styles';


export default function ButtonBar({ children, icon,...rest }) {
  return (

      <ContainerButton {...rest}>

        {icon && <Icon name={icon} size={35} color="#fff" />}
        <Text>{children}</Text>

      </ContainerButton>

  );
};