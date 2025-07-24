import { useDispatch, useSelector } from 'react-redux'
import { Produto } from '../../types/TipoProduto'
import * as S from './styles'
import { RootState } from '../../store'
import { toggleFavorite } from '../../store/slices/favoriteSlice'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const estaNosFavoritos = useSelector((state: RootState) =>
    state.favorites.items.some((fav) => fav.id === produto.id)
  )

  const favoritar = () => {
    dispatch(toggleFavorite(produto))
  }

  const comprar = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={comprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
