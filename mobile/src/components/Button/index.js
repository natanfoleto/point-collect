import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ icon, tamanho, cor, children, loading, ...rest }) {
  return (

    <Container {...rest}>
      {icon && <Icon name={icon} size={tamanho} color={cor} />}
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
          <Text>{children}</Text>
        )}
    </Container>

  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  loading: false,
  tamanho: 16,
  cor: "#fff",
}