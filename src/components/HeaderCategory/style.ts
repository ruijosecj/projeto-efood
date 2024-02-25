import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/vector.png'
import imageCategory from '../../assets/images/imageCategory.png'

export const HeaderStyled = styled.header`
  background-image: url(${fundo});
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageContainer = styled.div`
  background-image: url(${imageCategory});
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextContainer = styled.span`
  font-size: 18px;
  line-height: 22px;
  margin-left: 171px;
  font-weight: bold;
  color: ${cores.laranja};
`
export const TextContainerImage = styled.span`
  font-size: 32px;

  margin-left: 171px;
  line-weight: 38px;
  color: ${cores.branco};
`
