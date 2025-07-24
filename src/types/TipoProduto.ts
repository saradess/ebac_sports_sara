import { ReactNode } from 'react'
export type Props = {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

export type Produto = {
  title: ReactNode
  id: number
  nome: string
  preco: number
  imagem: string
  descricao: string
}

export interface ProdutoCardProps {
  produto: Produto
  favoritar: (produto: Produto) => void
  aoComprar: (produto: Produto) => void
  estaNosFavoritos: boolean
}
export type ProdutosProps = {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}
export type ProdutoCarrinho = Produto & {
  quantidade: number
}
