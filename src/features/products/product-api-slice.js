import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL="https://fakestoreapi.com/";

export const storeApiSlice=createApi({
    reducerPath:"store-api",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints(builder){
        return {
            fetchAllProducts:builder.query({
                query(limit){
                    return `products?limit=${limit}`
                }
            }),
            fetchSingleProduct:builder.query({
                query(id){
                    return `products/${id}`
                }
            })
        }
    }
})

export const { useFetchAllProductsQuery,useFetchSingleProductQuery } = storeApiSlice