import { describe, expect, it } from "vitest";
import { createDigitValidator } from "../src/components/algorithms/createDigitValidator";

const bin = "01";
const dec = "01223456789";
const hex = dec + "abcdef";
describe("createDigitValidator", () => {
  it("Допустимая цифра в двоичной системе", () => {
    const result = createDigitValidator(bin)("1");
    expect(result).toEqual(true);
  });
  it("Недопустимая цифра в двоичной системе", () => {
    const result = createDigitValidator(bin)("2");
    expect(result).toEqual(false);
  });
  it("Допустимая цифра в десятичной системе", () => {
    const result = createDigitValidator(dec)("6");
    expect(result).toEqual(true);
  });
  it("Недопустимая цифра в десятичной системе", () => {
    const result = createDigitValidator(dec)("A");
    expect(result).toEqual(false);
  });
  it("Буква A в шестнадцатеричной системе", () => {
    const result = createDigitValidator(hex)("A");
    expect(result).toEqual(true);
  });
  it("Буква a в шестнадцатеричной системе", () => {
    const result = createDigitValidator(hex)("a");
    expect(result).toEqual(true);
  });
  it("Недопустимая буква G в шестнадцатеричной системе.", () => {
    const result = createDigitValidator(hex)("G");
    expect(result).toEqual(false);
  });
  it("Функция действительно возвращает функцию", () => {
    const result = createDigitValidator(dec);
    expect(typeof result === "function").toEqual(true);
  });
});
