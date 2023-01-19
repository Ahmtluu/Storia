import React from 'react'
import { useFetchProductQuery } from '../features/products/product-api-slice'

export default function Product() {

    const {data,isFetching} =useFetchProductQuery();

  return (
    <div>Product</div>
  )
}
