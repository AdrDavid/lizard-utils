import {describe, it, expect} from 'vitest'
import {formatCEP} from '.'

describe('formatCEP', () => {
  it('format the full CEP', () => {
    expect(formatCEP('12345678')).toBe('12345-678')
    const result = formatCEP('12345678')
    console.log(result)
    expect(result).toBe('12345-678')
  })

  it('format a CEP that is already did format', () => {
    expect(formatCEP('12345-678')).toBe('12345-678')
  })

  it('format while typing', () => {
    expect(formatCEP('123')).toBe('123')
    expect(formatCEP('1234')).toBe('1234')
    expect(formatCEP('12345')).toBe('12345')
    expect(formatCEP('123456')).toBe('12345-6')
    expect(formatCEP('1234567')).toBe('12345-67')
    expect(formatCEP('12345678')).toBe('12345-678')
  })
})