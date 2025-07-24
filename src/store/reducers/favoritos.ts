import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/TipoProduto'

const initialState: Produto[] = []

const favoritosSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.find((item) => item.id === produto.id)) {
        state.push(produto)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((produto) => produto.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions

export default favoritosSlice.reducer
