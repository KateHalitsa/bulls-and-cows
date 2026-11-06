export function createDigitValidator(base: string) {
  return function (char: string): boolean {
    return base.toLowerCase().includes(char.toLowerCase());
  };
}
