const formater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrency(value: number): string{
  return formater.format(value).replace(/\u00A0/g, ' ');
}