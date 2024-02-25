import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  columns-gap: 80px;
  justify-content: center;
  align-itens: center;
  padding-bottom: 80px;
  background-color: ${cores.fundo};
  padding: 0 171px;
  padding-bottom: 80px;
`
