import React from 'react'
import { useFetchProductsQuery } from '../features/products/product-api-slice'

export default function Home() {

    const {data=[],isFetching} = useFetchProductsQuery();
  return (
    <>
    {
        data.map((product)=><p>{product.title}</p>)
    }
    </>

  )
}
