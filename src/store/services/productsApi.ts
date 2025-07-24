import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../../types/TipoProduto' // ajuste o caminho se necessário

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Produto[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = productsApi
