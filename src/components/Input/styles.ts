import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: transparent;

  & + div {
    margin-top: 16px;
  }

  legend {
    margin-left: 8px;
    margin-bottom: 8px;
    font-size: 10px;

    ${props =>
      props.isFocused &&
      css`
        color: #9d25b0;
      `}

    ${props =>
      props.isFilled &&
      css`
        color: #9d25b0;
      `}
  }

  > div {
    display: flex;
    align-items: center;

    width: 100%;

    box-sizing: border-box;
    border: 1px solid #989fdb;
    border-radius: 8px;

    > svg {
      margin-right: 20px;
    }

    transition: 0.2s;

    &:hover {
      border: 1px solid #9d25b0;
    }

    ${props =>
      props.isErrored &&
      css`
        border-color: #ff377f;
      `}

    ${props =>
      props.isFocused &&
      css`
        border: 1px solid #9d25b0;
      `}
  }

  input {
    width: 100%;
    height: 48px;
    padding: 17px;

    font-size: 10px;
    line-height: 48px;
    color: #383e71;
    background-color: transparent;
    border: none;

    &::placeholder {
      color: #989fdb;
    }
  }

  > span {
    margin: 8px 0 0 16px;
    font-size: 10px;
    color: #ff377f;
  }
`;
