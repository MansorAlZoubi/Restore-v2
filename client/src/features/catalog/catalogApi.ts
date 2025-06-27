import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";


export const catalogApi=createApi({
    reducerPath:'catalogApi',
    baseQuery:baseQueryWithErrorHandling ,
    endpoints:(builder)=>({
        fetchProducts:builder.query<Product[],void>({
            query:()=>({
                url:'product'
            }),
            
        }),
        fetchProductDetails:builder.query<Product,number>({
            query:(productId)=>`product/${productId}`
        })
    })
});
export const {
  useFetchProductsQuery,
  useFetchProductDetailsQuery
} = catalogApi;

  // fetchBaseQuery({baseUrl:'https://localhost:5001/api'}),