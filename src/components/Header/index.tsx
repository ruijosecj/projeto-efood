import { HeaderStyled } from './style'
import logo from '../../assets/images/logo.png'

export type Props = {
  size?: 'small' | 'big'
}

const Header = ({ size = 'big' }: Props) => (
  <HeaderStyled size={size}>
    <img src={logo} alt="Logo" />
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeaderStyled>
)

export default Header
