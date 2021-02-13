import styled from 'styled-components';

import logoWiser from '../../assets/logo-wiser.png';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  position: absolute;

  width: 100%;
  top: 32px;

  strong {
    margin-left: 5px;
  }

  button {
    width: 100px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${logoWiser}) no-repeat center;
`;
