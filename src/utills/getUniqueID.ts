import { CartItemType } from './types'

export function getUniqueID(action: CartItemType): string {
  return `${action.id}-${action.size}-${action.type}`
}
