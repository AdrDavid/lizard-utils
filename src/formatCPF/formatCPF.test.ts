import {describe, it, expect} from 'vitest'
import { formatCPF } from '.'

describe('formatCPF', () => {
  it('format the full CPF', () => {
    expect(formatCPF('12345678901')).toBe('123.456.789-01')
  })

  it('format a CPF that is already did format', () => {
    expect(formatCPF('123.456.789-01')).toBe('123.456.789-01')
  })

  it('format while typing', () => {
    expect(formatCPF('123')).toBe('123')
    expect(formatCPF('1234')).toBe('123.4')
    expect(formatCPF('1234567')).toBe('123.456.7')
    expect(formatCPF('1234567890')).toBe('123.456.789-0')
  })

  it('ignores extra digits', () => {
    expect(formatCPF('1234567890123')).toBe('123.456.789-01')
  })
})