import { getSize } from '../getSize'

describe('getSize method test', () => {
  const medium = 'medium'
  const small = 'small'

  it('should return "Small size 26cm" when size is small', () => {
    expect(getSize(small)).toBe('Small size 26cm')
  })

  it('should return "Medium size 30cm" when size is medium', () => {
    expect(getSize(medium)).toBe('Medium size 30cm')
  })

  it('should return "Large size 40cm" when size is not medium or small', () => {
    expect(getSize('size')).toBe('Large size 40cm')
  })
})
