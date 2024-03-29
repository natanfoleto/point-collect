import React, { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ icon, children, style, ...rest },ref) {

   return (

    <Container style={style}>
      { icon && <Icon name={icon} size={20} color="#4BCB56" />}
      <TInput {...rest}  ref={ref} />
      {children}
    </Container>
  )
}

Input.PropTypes = {
  children: null,
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);