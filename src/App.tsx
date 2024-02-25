import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante',
    element: <Restaurante />
  }
])

function App() {
  return (
    <>
      <GlobalCss />

      <RouterProvider router={rotas} />
    </>
  )
}

export default App
