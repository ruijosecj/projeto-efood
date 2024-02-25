import RestauranteModelCategory from '../../models/RestauranteModelCategory'
import ProductCategory from '../ProductCategory'
import { List, Container } from './style'

type Props = {
  restaurantes: RestauranteModelCategory[]
}

const ProductsListCategory = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <ProductCategory
            key={restaurante.id}
            image={restaurante.image}
            title={restaurante.title}
            descricao={restaurante.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListCategory
