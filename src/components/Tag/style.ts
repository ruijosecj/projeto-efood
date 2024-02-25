import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 11px' : '4px 6px')};
  display: inline-block;
  margin-left: 8px;
`
