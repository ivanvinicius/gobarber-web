import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default Input;
