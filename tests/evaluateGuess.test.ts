import { describe, expect, it } from "vitest";
import { evaluateGuess } from "../src/components/algorithms/evaluateGuess";

describe("evaluateGuess", () => {
  it("Все символы совпали на своих местах", () => {
    const result = evaluateGuess("4271", "4271");
    expect(result).toEqual({ bulls: 4, cows: 0 });
  });
  it("Ни одного совпадения", () => {
    const result = evaluateGuess("1234", "5678");
    expect(result).toEqual({ bulls: 0, cows: 0 });
  });
  it("Все символы есть, но стоят не на своих местах", () => {
    const result = evaluateGuess("1234", "4321");
    expect(result).toEqual({ bulls: 0, cows: 4 });
  });
  it("Результат содержит оба свойства", () => {
    const result = evaluateGuess("1234", "1325");
    expect(result).toEqual({ bulls: 1, cows: 2 });
  });
  it("Cовпавший по позиции символ не засчитывается ещё и как корова", () => {
    const result = evaluateGuess("1234", "1432");
    expect(result).toEqual({ bulls: 2, cows: 2 });
  });
});
