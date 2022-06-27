import { CartItemType, SortType } from '../../utills'
import { CartStateItems, identType } from '../../redux/cart/cartSlice'

export const cartItemMock: CartItemType = {
  id: 123,
  name: 'pizza-slice',
  price: 999,
  image: 'https://image.url/',
  size: 'small',
  type: 0
}

export const singleCartItemMock: identType = {
  pizzas: [cartItemMock],
  totalPrice: 999,
  totalCount: 1
}

export const cartStateItemMock: CartStateItems = {
  pepperoni: singleCartItemMock
}

export const categoriesMock: Array<string> = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']

export const sortMock: Array<SortType> = ['rating', 'price', 'name']
