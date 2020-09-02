import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, ContainerButton} from './styles';


export default function ButtonBar({ children, icon,...rest }) {
  return (

      <ContainerButton {...rest}>
        {icon && <Icon name={icon} size={32} color="#fff" />}
        <Text>{children}</Text>
      </ContainerButton>

  );
};