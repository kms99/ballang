import { Product } from '@/types/product.types'
import axios from 'axios'

// 전체 상품 정보 fetch
export async function getProducts() {
  try {
    const res = await axios('https://api.ballang.yoojinyoung.com/products')
    const data = await res.data
    // fetch 실패시
    if (!data.success) {
      throw data.error.message
    }
    // fetch 성공시
    const result: Product[] = data?.result
    return result
  } catch (error) {
    console.error(error)
  }
  return []
}

// 단일 상품 정보 fetch
export const getProduct = () => {}
