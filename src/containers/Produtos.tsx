import Produto from '../components/Produto'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootState) => state.products.items)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
