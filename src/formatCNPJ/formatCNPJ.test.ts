import { describe, it, expect } from 'vitest'
import { formatCNPJ } from '.'

describe('formatCNPJ', () => {
  it('formata CNPJ completo', () => {
    expect(formatCNPJ('12345678000190')).toBe('12.345.678/0001-90')
  })

  it('formata CNPJ que já vem formatado', () => {
    expect(formatCNPJ('12.345.678/0001-90')).toBe('12.345.678/0001-90')
  })

  it('formata enquanto digita', () => {
    expect(formatCNPJ('12')).toBe('12')
    expect(formatCNPJ('123')).toBe('12.3')
    expect(formatCNPJ('123456')).toBe('12.345.6')
    expect(formatCNPJ('123456789')).toBe('12.345.678/9')
    expect(formatCNPJ('1234567800019')).toBe('12.345.678/0001-9')
  })

  it('ignora dígitos a mais', () => {
    expect(formatCNPJ('1234567800019099')).toBe('12.345.678/0001-90')
  })
})