import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch } from 'react-redux'
import { setProducts } from './store/slices/productsSlice' // crie essa action se não existir

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProducts(res))
      })
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
