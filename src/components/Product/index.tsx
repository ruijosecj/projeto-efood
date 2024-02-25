import Button from '../Button'
import estrela from '../../assets/images/Dribbble-Light-Preview.png'

import { Card, Descricao, Titulo, Infos } from './style'
import Tag from '../Tag'

type Props = {
  infos: string[]
  image: string
  title: string
  descricao: string
  nota: string
}
const Product = ({ infos, image, title, descricao, nota }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <span>
        <Titulo>
          {nota} <img src={estrela} alt="Estrela" />
        </Titulo>
      </span>
    </div>
    <Descricao>{descricao}</Descricao>
    <Button type="button" to="/">
      Saiba mais
    </Button>
  </Card>
)

export default Product
