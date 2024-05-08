import { getProducts } from '@/actions/productsAction'
import H2 from '@/components/atoms/H2'
import ProductList from '@/components/product/ProductList'
import React from 'react'

export const revalidate = 10

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="px-8 py-10 flex flex-col items-center md:px-5 md:py-6">
      <H2 className="my-12">Trending</H2>
      <ProductList products={products} />
    </div>
  )
}
