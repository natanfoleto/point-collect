import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text, ContainerButton} from './styles';


export default function ButtonBar({ cor, children, icon,...rest }) {
  return (

      <ContainerButton {...rest}>
        {icon && <Icon name={icon} size={32} color={cor} />}
        <Text>{children}</Text>
      </ContainerButton>

  );
};