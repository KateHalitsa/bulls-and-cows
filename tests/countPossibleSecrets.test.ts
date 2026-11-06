import { describe, expect, it } from "vitest";
import { countPossibleSecrets } from "../src/components/algorithms/countPossibleSecrets";

describe("countPossibleSecrets", () => {
  it("Подсчёт для двоичной системы с длиной 1", () => {
    const result = countPossibleSecrets(1, 2);
    expect(result).toEqual(2);
  });
  it("Десятичная система, длина 2", () => {
    const result = countPossibleSecrets(2, 10);
    expect(result).toEqual(90);
  });
  it("Шестнадцатеричная система, длина 1", () => {
    const result = countPossibleSecrets(1, 16);
    expect(result).toEqual(16);
  });
  it("Длина равна основанию", () => {
    const result = countPossibleSecrets(2, 2);
    expect(result).toEqual(2);
  });
  it("Длина превышает основание", () => {
    expect(() => countPossibleSecrets(3, 2)).toThrow();
  });
  it("Повторный вызов с одинаковыми аргументами возвращает тот же результат", () => {
    const firstResult = countPossibleSecrets(3, 10);
    const secondResult = countPossibleSecrets(3, 10);

    expect(secondResult).toBe(firstResult);
  });
});
