import styled from 'styled-components';

import logoWiser from '../../assets/logo-wiser.png';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  place-content: center;

  width: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${logoWiser}) no-repeat center;
`;
