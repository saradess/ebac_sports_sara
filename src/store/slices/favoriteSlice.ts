import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types/TipoProduto'

interface FavoritesState {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const index = state.items.findIndex(
        (item: { id: unknown }) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.items.splice(index, 1)
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
