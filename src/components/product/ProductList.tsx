import React from 'react'
import { Product } from '@/types/product.types'
import ProductItem from './ProductItem'

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="grid w-full sm:grid-cols-2 md:grid-cols-4 grid-cols-6 gap-x-8 gap-y-12">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  )
}
