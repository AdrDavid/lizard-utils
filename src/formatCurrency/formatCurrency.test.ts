import { describe, it, expect } from "vitest";
import { formatCurrency } from ".";

describe("formatCurrency", () => {
  it("formats an integer", () => {
    expect(formatCurrency(1500)).toBe("R$ 1.500,00");
    const result = formatCurrency(1234567);
    console.log(result);
    expect(result).toBe("R$ 1.234.567,00");
  });

  it("formats decimals", () => {
    expect(formatCurrency(1500.5)).toBe("R$ 1.500,50");
  });

  it("formats zero", () => {
    expect(formatCurrency(0)).toBe("R$ 0,00");
  });

  it("formats negative values", () => {
    expect(formatCurrency(-10)).toBe("-R$ 10,00");
  });

  it("formats millions", () => {
    expect(formatCurrency(1234567.89)).toBe("R$ 1.234.567,89");
  });
});