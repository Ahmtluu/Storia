import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL="https://fakestoreapi.com/products";

export const storeApiSlice=createApi({
    reducerPath:"store-api",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints(builder){
        return {
            fetchAllProducts:builder.query({
                query(limit){
                    return `?limit=${limit}`
                }
            }),
            fetchSingleProduct:builder.query({
                query(id){
                    return `/${id}`
                }
            })
        }
    }
})

export const { useFetchAllProductsQuery,useFetchSingleProductQuery } = storeApiSlice