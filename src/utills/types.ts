const apiResponse = {
  id: 6,
  imageUrl: [
    'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
    'https://dodopizza-a.akamaihd.net/static/Img/Products/cf75e2de43ed4093b3cd697bd1809d63_584x584.jpeg'
  ],
  name: 'Pepperony',
  types: [0, 1],
  sizes: ['small', 'medium', 'large'],
  price: [15, 24, 32],
  category: 1,
  rating: 9
}

export type ResponseType = typeof apiResponse

export type ContentTypes = {
  [key: string]: string[]
}

export type CartItemType = {
  id: number
  name: string
  price: number
  image: string
  size: string
  type: number
}

export type SortType = 'rating' | 'price' | 'name'
