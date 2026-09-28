import { onlyNumbers } from "../onlyNumbers";

export function formatCPF(value: string): string{
  const digits = onlyNumbers(value).slice(0, 11);

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2}$)/, "$1-$2")
}

