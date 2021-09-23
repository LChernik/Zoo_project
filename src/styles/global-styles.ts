import styled, { createGlobalStyle } from 'styled-components';
import { media } from 'styles/media';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  h1{
    margin: 0;
  }

  p,
  label {
    font-family: 'Montserrat', Arial, sans-serif;
    line-height: 1.5em;
    margin: 0;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }


`;

export const Container = styled.div`
  z-index: 1;
  margin: auto;
  padding: 30px 0;
  ${media.large`
    max-width: 1120px;
  `}
  ${media.xlarge`
    max-width: 1400px;
  `}
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 26px 45px;
  text-transform: uppercase;
  background: #F58021;
  color: white;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  width: fit-content;
`;
