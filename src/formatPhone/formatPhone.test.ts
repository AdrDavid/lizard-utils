import { describe, it, expect } from 'vitest'
import { formatPhone } from '.'

describe('formatPhone', () => {
  it('format the full phone', () => {
    expect(formatPhone('66944442222')).toBe('(66) 94444-2222')
  })

  it('format a phone that is already did format', () => {
    expect(formatPhone('(66) 94444-2222')).toBe('(66) 94444-2222')
  })

  it('format while typing', () => {
    expect(formatPhone('66')).toBe('66')
    expect(formatPhone('669')).toBe('(66) 9')
    expect(formatPhone('6694444')).toBe('(66) 94444')
    expect(formatPhone('66944442222')).toBe('(66) 94444-2222')
  })

  it('ignores extra digits', () => {
    expect(formatPhone('6694444222233')).toBe('(66) 94444-2222')
  })
})