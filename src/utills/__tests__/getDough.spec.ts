import { getDough } from '../getDough'

describe('getDough method test', () => {
  it('should return "traditional dough" when dough number is 0', () => {
    expect(getDough(0)).toBe('traditional dough')
  })

  it('should return "slim dough" when dough number differs from 0', () => {
    expect(getDough(1)).toBe('slim dough')
  })
})
