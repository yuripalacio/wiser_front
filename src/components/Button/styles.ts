import styled, { css } from 'styled-components';

interface IButtonProps {
  isLoading: boolean;
}

export const Container = styled.button<IButtonProps>`
  width: 100%;
  height: 48px;
  margin: 24px 0 32px 0;

  color: #ffffff;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border: none;
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background: linear-gradient(267.79deg, #2c315a 0%, #7d1d8c 99.18%);
  }

  ${props =>
    props.isLoading &&
    css`
      cursor: not-allowed;
    `}
`;
