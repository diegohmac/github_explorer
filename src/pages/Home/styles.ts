import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  max-width: 450px;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 30px;

    input {
      flex: none;
      border-radius: 5px 5px 0 0;
      border: 2px solid #fff;
      border-bottom: 0;
      ${props =>
        props.hasError &&
        css`
          border-color: #c53030;
        `}
    }

    button {
      width: 100%;
      border-radius: 0 0 5px 5px;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    a {
      flex: 1;
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: transform 0.2s;

      &:hover {
        transform: translateX(10px);
      }

      & + a {
        margin-top: 16px;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      div {
        flex: 1;
        margin: 0 16px;

        strong {
          font-size: 20px;
          color: #3d3d4d;
        }

        p {
          font-size: 18px;
          color: #a8a8b3;
          margin-top: 4px;
        }
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }

    & > svg {
      display: inline-block;
      margin-left: 8px;
      transition: all 0.2s;
      color: #cbcbd6;
      cursor: pointer;
      &:hover {
        color: #c53030;
        transform: scale(1.2);
        transform: rotate(90deg);
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;

    & > div {
      flex-direction: column;

      a {
        flex-direction: column;

        div {
          margin: 0;
        }

        div strong {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 10px;
        }

        div p {
          text-align: center;
        }

        svg {
          display: none;
        }
      }
    }

    & > div > svg:last-of-type {
      margin: 10px 0 0 0;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
