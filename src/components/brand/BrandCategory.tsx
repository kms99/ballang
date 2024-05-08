import { getBrands } from '@/actions/brandsAction'
import Link from 'next/link'
import React from 'react'

export default async function BrandCategory() {
  const brands = await getBrands()

  return (
    <ul>
      {brands.map((brand) => (
        <li key={brand.id}>
          <Link href={{ pathname: '/brands', query: { brandId: brand.id } }}>
            {brand.nameKr}
          </Link>
        </li>
      ))}
    </ul>
  )
}
