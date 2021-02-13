import styled from 'styled-components';

import singInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media (max-width: 499px) {
    background: #130525;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 100%;

  > span {
    width: 256px;
    text-align: center;

    font-size: 14px;
    line-height: 20px;
    color: #989fdb;

    a {
      margin-left: 5px;
      color: #9d25b0;
      text-decoration: underline;
      transition: color 0.2s;

      &:hover {
        color: #383e71;
      }
    }
  }

  @media (max-width: 499px) {
    position: relative;
    align-items: center;
    margin: auto;
    text-align: center;
    > span {
      margin-top: 47px;
      color: #ffffff;

      > a {
        color: #ffffff;
      }
    }
  }

  @media (min-width: 500px) {
    max-width: 456px;
    margin-left: 112px;
  }

  @media (min-width: 1025px) {
    max-width: 601px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 256px;

  h1 {
    size: 40px;
    line-height: 48px;
  }

  > span {
    margin: 16px 0 43px 0;

    font-weight: 600;
    line-height: 20px;
    color: #989fdb;
  }

  form {
    width: 256px;
    text-align: center;
  }

  @media (max-width: 499px) {
    align-items: center;
    text-align: center;
    place-content: center;

    width: 100%;

    max-width: 311px;

    background: #faf5ff;
    border-radius: 8px;

    h1 {
      margin-top: 24px;
      size: 24px;
    }

    > span {
      margin-bottom: 20px;
      font-size: 12px;
    }

    form {
      padding-bottom: 57px;

      button {
        position: absolute;
        width: 168px;
        height: 48px;

        margin-top: 30px;
        left: 50%;
        transform: translateX(-50%);

        box-shadow: none;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singInBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 499px) {
    position: absolute;
    width: 100%;
    height: 50%;
  }
`;
