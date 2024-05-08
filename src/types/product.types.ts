export interface Brand {
  id: number
  nameKr: string
  nameEn: string
}

export interface Product {
  id: number
  name: string
  imgSrc: string
  onlineStock: number
  price: number
  originalPrice: number
  deliveryType: '당일배송'
  brandId: number
  brand: Brand
}
