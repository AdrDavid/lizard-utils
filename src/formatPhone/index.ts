import { onlyNumbers } from "../onlyNumbers";

export function formatPhone(value: string): string {
  const digits = onlyNumbers(value).slice(0, 11);
  //+55 (66) 992129562
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    
}
