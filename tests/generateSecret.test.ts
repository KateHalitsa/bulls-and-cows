import { describe, it, expect } from "vitest";
import { generateSecret } from "../src/components/algorithms/generateSecret";

const allowed10Chars = "0123456789";

describe("generateSecret", () => {
  it("генерирует секрет предсказуемо", () => {
    const values = [0.1, 0.4, 0.7, 0.9];
    let index = 0;

    const random = () => values[index++];

    const result = generateSecret(4, 10, random);

    expect(result).toBe("1479");
  });
  it("Генерирует секрет в правильной системе счисления и длины", () => {
    const values = [0.1, 0.4, 0.7, 0.9];
    let index = 0;

    const random = () => values[index++];

    const result = generateSecret(4, 10, random);

    expect(result.length).toBe(4);
    expect([...result].every((char) => allowed10Chars.includes(char))).toBe(
      true,
    );
  });
  it("Генерация секрета с лидирующим нулём", () => {
    const values = [0, 0.4, 0.7, 0.9];
    let index = 0;

    const random = () => values[index++];

    const result = generateSecret(4, 10, random);

    expect(result[0]).toBe("0");
  });
  it("Все цифры результата уникальны", () => {
    const values = [0, 0.4, 0.7, 0.9];
    let index = 0;

    const random = () => values[index++];

    const result = generateSecret(4, 10, random);

    expect(new Set(result).size === result.length).toBe(true);
  });
  it("length больше base вызывает ошибку", () => {
    const values = [0, 0.4, 0.7, 0.9];
    let index = 0;

    const random = () => values[index++];

    expect(() => generateSecret(11, 10, random)).toThrow();
  });
});
