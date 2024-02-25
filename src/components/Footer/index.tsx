import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import face from '../../assets/images/face.png'
import twiter from '../../assets/images/twiter.png'
import {
  FooterContainer,
  UlContainer,
  TextContainer,
  RedesSociais
} from './style'
const Footer = () => (
  <FooterContainer>
    <div className="container">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <UlContainer>
          <RedesSociais>
            <img src={instagram} alt="instagram" />
          </RedesSociais>
          <RedesSociais>
            <img src={face} alt="face" />
          </RedesSociais>
          <RedesSociais>
            <img src={twiter} alt="twiter" />
          </RedesSociais>
        </UlContainer>
      </div>
      <div>
        <TextContainer>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextContainer>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
