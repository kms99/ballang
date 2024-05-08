export const formatPrice = (price: number | string) => {
  const reversePriceArray = String(price).split('').reverse()
  const newPriceArray = []
  for (let i = 0; i < reversePriceArray.length; i += 1) {
    if (i % 3 === 0 && i !== 0) newPriceArray.push(',')
    newPriceArray.push(reversePriceArray[i])
    if (i === reversePriceArray.length - 1) newPriceArray.push('₩')
  }
  return newPriceArray.reverse().join('')
}
