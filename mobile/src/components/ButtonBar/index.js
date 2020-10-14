import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Text, ContainerButton} from './styles';

export default function ButtonBar({ icon, tamanho, cor, children, ...rest }) {
  return (
      <ContainerButton {...rest}>
        {icon && <Icon name={icon} size={tamanho} color={cor} />}
        <Text>{children}</Text>
      </ContainerButton>
  );
};

ButtonBar.propTypes = {
  children: PropTypes.string,
};


ButtonBar.defaultProps = {
  icon: null,
  children: null,
  tamanho: 16,
  cor: "#fff",
}