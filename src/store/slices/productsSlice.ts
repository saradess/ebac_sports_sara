import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types/TipoProduto'

interface ProductsState {
  items: Produto[]
}

const initialState: ProductsState = {
  items: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Produto[]>) => {
      state.items = action.payload
    }
  }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
