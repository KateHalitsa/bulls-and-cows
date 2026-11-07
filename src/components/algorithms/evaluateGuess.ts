import { Hint } from "../../types/types";
import { createDigitValidator } from "./createDigitValidator";

export function evaluateGuess(secret: string, guess: string): Hint {
  const secretArr = Array.from(secret.toLowerCase());
  const guessArr = Array.from(guess.toLowerCase());
  const bulls = guessArr.filter((char, i) => char === secretArr[i]);

  const isInSecret = createDigitValidator(secret);

  const cows = guessArr.filter(
    (char, i) => isInSecret(char) && char !== secretArr[i],
  );
  return { bulls: bulls.length, cows: cows.length };
}
