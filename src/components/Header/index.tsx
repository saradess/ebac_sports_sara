import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { ProdutoCarrinho } from '../../store/reducers/carrinho'

const Header = () => {
  const favoritos = useSelector((state: RootState) => state.favorites.items)
  const itensNoCarrinho = useSelector((state: RootState) => state.cart)
  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item: ProdutoCarrinho) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
