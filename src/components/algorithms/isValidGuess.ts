import { createDigitValidator } from "./createDigitValidator";

export function isValidGuess(guess: string, length: number, base: number) {
  if (guess.length != length) {
    return false;
  }

  const availableSymbols = "0123456789ABCDEF";
  const notation = availableSymbols.slice(0, base);
  const isDigitValid = createDigitValidator(notation);

  const allCharsAllowed = Array.from(guess).every(isDigitValid);

  if (!allCharsAllowed) {
    return false;
  }

  const setOfGuess = new Set(guess);

  if (setOfGuess.size !== guess.length) {
    return false;
  }

  return true;
}
