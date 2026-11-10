import { describe, expect, it } from "vitest";
import { isValidGuess } from "../src/components/algorithms/isValidGuess";

describe("isValidGuess", () => {
  it("Коректный ввод", () => {
    const result = isValidGuess("1234", 4, 10);
    expect(result).toBe(true);
  });
  it("Недопустимые символы для base", () => {
    const result = isValidGuess("123A", 4, 10);
    expect(result).toBe(false);
  });
  it("Недопустимая длина", () => {
    const result = isValidGuess("123456", 4, 10);
    expect(result).toBe(false);
  });
  it("Повторяющиеся числа", () => {
    const result = isValidGuess("6778", 4, 10);
    expect(result).toBe(false);
  });
  it("Слишком короткий ввод", () => {
    const result = isValidGuess("123", 4, 10);
    expect(result).toBe(false);
  });
});
