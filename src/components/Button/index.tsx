import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => (
  <Container disabled={loading} isLoading={loading} type="button" {...rest}>
    {loading ? 'Processando...' : children}
  </Container>
);

export default Button;
