import { Product } from '@/types/product.types'
import { formatPrice } from '@/utils/product.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductItemPriceContainer from './ProductItemPriceContainer'
import ProductItemDetailInfoContainer from './ProductItemDetailInfoContainer'

export default function ProductItem({ ...product }: Product) {
  const originalPrice = formatPrice(product.originalPrice)
  const price = formatPrice(product.price)
  return (
    <li className="group">
      <Link href={`/products/${product.id}`} className="flex flex-col gap-4">
        <Image
          src={product.imgSrc}
          alt="product img"
          width={630}
          height={840}
          className="scale-100 group-hover:scale-105 transition-transform"
        />
        <ProductItemDetailInfoContainer>
          <span className="text-sm font-bold">{product.brand.nameEn}</span>
          <h3 className="text-[0.938rem] break-all">{product.name}</h3>
          <ProductItemPriceContainer>
            <span className="font-semibold line-through text-red-500">
              {originalPrice}
            </span>
            <span className="font-bold">{price}</span>
          </ProductItemPriceContainer>
        </ProductItemDetailInfoContainer>
      </Link>
    </li>
  )
}
