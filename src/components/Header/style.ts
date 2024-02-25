import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/vector.png'
import { Props } from '.'

export const HeaderStyled = styled.header<Props>`
  background-image: url(${fundo});
  height: ${(props) => (props.size === 'big' ? '360px' : '163px')};

  img {
    margin-top: 40px;
    margin-left: 621px;
  }

  P {
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    margin-top: 138px;
    margin-left: 414px;
    max-width: 539px;
  }
`
