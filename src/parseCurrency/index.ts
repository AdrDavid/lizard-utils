export function parseCurrency(value: string): number {
  const normalized = value
    .replace(/[^\d,-]/g, "")
    .replace(",", ".");

    const number = Number(normalized);

    return Number.isNaN(number) ? 0 : number;
}