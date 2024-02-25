import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  height: 298px;
  background-color: ${cores.salmao};
  padding-left: 621px;
  padding-top: 40px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 88px;
  margin-top: 40px;
`
export const TextContainer = styled.p`
  font-size: 10px;
  font-weight: 400px;
  line-height: 12px;
  margin-top: 40px;
  color: ${cores.laranja};
`
export const RedesSociais = styled.li`
  margin-right: 8px;
`
