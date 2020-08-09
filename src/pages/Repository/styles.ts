import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { FiLoader } from 'react-icons/fi';

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: ${shade('0.2', '#a8a8b3')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      width: 100%;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 30px;

    header {
      flex-direction: column;

      div {
        margin: 10px 0 0 0;

        strong {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
      }
    }

    ul {
      flex-wrap: wrap;
      li {
        flex: 1 0;
        & + li {
          margin-left: 0;
        }
      }
      li:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
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
`;

export const NotFound = styled.p`
  margin-top: 80px;
  font-size: 24px;
  color: ${shade(0.2, '#a8a8b3')};
`;

export const Loading = styled(FiLoader)`
  display: block;
  margin: 25% auto;
  animation: ${spin} 4s linear infinite;
`;
