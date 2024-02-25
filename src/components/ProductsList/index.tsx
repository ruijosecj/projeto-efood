import Restaurante from '../../models/RestauranteModel'
import Product from '../Product'
import { List, Container } from './style'

type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            image={restaurante.image}
            title={restaurante.title}
            infos={restaurante.infos}
            descricao={restaurante.descricao}
            nota={restaurante.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
