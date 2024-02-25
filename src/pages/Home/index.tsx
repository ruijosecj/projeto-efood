import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/RestauranteModel'
import sushi from '../../assets/images/sushi.png'
import la_dolce from '../../assets/images/la_dolce.png'
import Footer from '../../components/Footer'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nota: '4.9'
  },
  {
    id: 2,
    image: la_dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6'
  },
  {
    id: 3,
    image: la_dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6'
  },
  {
    id: 4,
    image: la_dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6'
  },
  {
    id: 5,
    image: la_dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6'
  },
  {
    id: 6,
    image: la_dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: '4.6'
  }
]

const Home = () => (
  <div className="container">
    <Header />
    <ProductsList restaurantes={restaurantes} />
    <Footer />
  </div>
)

export default Home
