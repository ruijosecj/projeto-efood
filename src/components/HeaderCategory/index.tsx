import {
  HeaderStyled,
  ImageContainer,
  TextContainer,
  TextContainerImage
} from './style'
import logo from '../../assets/images/logo.png'

const HeaderCategory = () => (
  <>
    <HeaderStyled>
      <TextContainer>Restaurantes</TextContainer>
      <img src={logo} alt="Logo" />
      <TextContainer>0 produto(s) no carrinho</TextContainer>
    </HeaderStyled>
    <ImageContainer>
      <TextContainerImage>Italiana</TextContainerImage>
      <TextContainerImage>La Dolce Vita Trattoria</TextContainerImage>
    </ImageContainer>
  </>
)

export default HeaderCategory
