import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.laranja};
  display: flex;
  flex-direction: column;
  max-width: 472px;
  margin-top: 80px;
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
  margin-left: 8px;
  color: ${cores.laranja};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  color: ${cores.laranja};
  display: block;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
