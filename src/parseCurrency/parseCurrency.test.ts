import { describe, it, expect } from "vitest";
import { parseCurrency } from ".";
import { formatCurrency } from "../formatCurrency";

describe("parseCurrency", () => {
  it("parses a formatted value", () => {
    expect(parseCurrency("R$ 1.500,50")).toBe(1500.5);
    const result = parseCurrency("R$ 1.234.567,89");
    console.log(result); // Output the result to the console
    expect(result).toBe(1234567.89);
  });

  it("parses without the currency symbol", () => {
    expect(parseCurrency("1.234.567,89")).toBe(1234567.89);
  });

  it("parses negative values", () => {
    expect(parseCurrency("-R$ 10,00")).toBe(-10);
  });

  it("returns 0 for empty input", () => {
    expect(parseCurrency("")).toBe(0);
  });

  it("reverts formatCurrency", () => {
    expect(parseCurrency(formatCurrency(1500.5))).toBe(1500.5);
  });
});