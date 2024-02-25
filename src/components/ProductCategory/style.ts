import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  border: 1px solid ${cores.laranja};
  color: ${cores.salmao};
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin-top: 80px;
  padding: 8px;
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 7px;
  color: ${cores.salmao};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.salmao};
  display: block;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
