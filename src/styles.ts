import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#FFF8F2',
  laranja: '#E66767',
  salmao: '#FFEBD9',
  branco: '#fff'
}
export const GlobalCss = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style: none;
  }

  .container{
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`
