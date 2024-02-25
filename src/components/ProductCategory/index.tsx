import ButtonCategory from '../ButtonCategory'

import { Card, Descricao, Titulo } from './style'

type Props = {
  image: string
  title: string
  descricao: string
}
const ProductCategory = ({ image, title, descricao }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{descricao}</Descricao>
    <ButtonCategory type="button" to="/">
      Adicionar ao carrinho
    </ButtonCategory>
  </Card>
)

export default ProductCategory
