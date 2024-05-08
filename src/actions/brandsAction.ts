import { Brand } from '@/types/product.types'
import axios from 'axios'

// 전체 상품 정보 fetch
export async function getBrands() {
  try {
    const res = await axios('https://api.ballang.yoojinyoung.com/brands')
    const data = await res.data
    // fetch 실패시
    if (!data.success) {
      throw data.error.message
    }
    // fetch 성공시
    const result: Brand[] = data?.result
    return result
  } catch (error) {
    console.error(error)
  }
  return []
}
