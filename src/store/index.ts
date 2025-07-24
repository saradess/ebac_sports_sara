import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/carrinho'
import favoritesReducer from './slices/favoriteSlice'
import productsReducer from './slices/productsSlice'
import { productsApi } from './services/productsApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
