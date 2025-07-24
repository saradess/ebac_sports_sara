import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/TipoProduto'

export type ProdutoCarrinho = Produto & { quantidade: number }

const initialState: ProdutoCarrinho[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoIndex = state.findIndex((p) => p.id === action.payload.id)

      if (produtoIndex >= 0) {
        state[produtoIndex].quantidade += 1
      } else {
        state.push({ ...action.payload, quantidade: 1 })
      }
    },

    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      return state.filter((p) => p.id !== action.payload)
    },

    alterarQuantidade: (
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) => {
      const produto = state.find((p) => p.id === action.payload.id)
      if (produto) {
        produto.quantidade = action.payload.quantidade
      }
    },

    limparCarrinho: () => []
  }
})

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  alterarQuantidade,
  limparCarrinho
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
