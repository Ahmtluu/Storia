import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL="https://fakestoreapi.com/products";


export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints(builder){
        return {
            fetchProducts:builder.query({
                query(limit){
                    return `?limit=${limit}`
                }
            }),
            fetchProduct:builder.query({
                query(id){
                    return `/${id}`
                }
            })
        }
    }
})


export const { useFetchProductsQuery,useFetchProductQuery } = apiSlice