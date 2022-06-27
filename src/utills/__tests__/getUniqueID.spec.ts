import { getUniqueID } from '../getUniqueID'
import { cartItemMock } from '../../tests/mocks'

describe('getUniqueID method test', () => {
  it('should return unique id based on passing object', () => {
    const expectedResult = `${cartItemMock.id}-${cartItemMock.size}-${cartItemMock.type}`

    expect(getUniqueID(cartItemMock)).toEqual(expectedResult)
  })
})
