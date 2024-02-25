import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${cores.laranja};
  background-color: ${cores.salmao};
  border: none;
  font-size: 14px;
  font-weight: 400px;
  padding: 4px 6px;
  width: 304px;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 14px;
`

export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  background-color: ${cores.laranja}
  font-size:14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
