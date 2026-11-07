import { GameState, maxString } from "../../types/types";
import { createDigitValidator } from "../algorithms/createDigitValidator";
import { evaluateGuess } from "../algorithms/evaluateGuess";
import { isValidGuess } from "../algorithms/isValidGuess";
import { createResultTable } from "./ResultTable";

export function createAttempt(
  base: number,
  length: number,
  gameState: GameState,
): HTMLDivElement {
  const attempt = document.createElement("div");
  attempt.classList.add("attempt");

  const guessSection = document.createElement("div");
  guessSection.classList.add("guess-section");

  const attemptResultSection = document.createElement("div");
  attemptResultSection.classList.add("attempt-result-section");

  const checkButton = document.createElement("button");
  checkButton.classList.add("check-btn");
  checkButton.textContent = "Check";

  const baseMessage = "The symbol does not match the numeral system.";
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("guess-error");
  errorMessage.hidden = true;

  const allowedChars = maxString.slice(0, base);
  const isDigitValid = createDigitValidator(allowedChars);

  //console.log(gameState.secret);

  for (let i = 0; i < length; i++) {
    const guessNumber = document.createElement("input");

    guessNumber.type = "text";
    guessNumber.maxLength = 1;
    guessNumber.classList.add("guess-number");

    guessNumber.addEventListener("input", () => {
      const value = guessNumber.value;

      const isValid = value === "" || isDigitValid(value);

      guessNumber.classList.toggle("invalid", !isValid);
      guessNumber.setAttribute("aria-invalid", String(!isValid));

      const hasInvalidInput = Array.from(
        guessSection.querySelectorAll<HTMLInputElement>(".guess-number"),
      ).some((input) => input.classList.contains("invalid"));

      errorMessage.textContent = baseMessage;
      errorMessage.hidden = !hasInvalidInput;
    });
    guessSection.append(guessNumber);
  }

  checkButton.addEventListener("click", () => {
    const guess = Array.from(
      guessSection.querySelectorAll<HTMLInputElement>(".guess-number"),
    )
      .map((input) => input.value)
      .join("");

    const isValid = isValidGuess(guess, length, base);

    if (!isValid) {
      errorMessage.textContent = "Invalid guess. Check your input.";
      errorMessage.hidden = false;
      return;
    }

    errorMessage.hidden = true;

    const result = evaluateGuess(gameState.secret, guess);
    gameState.guesses++;
    renderAttemptResult(attemptResultSection, result.bulls, result.cows);

    if (result.bulls === length) {
      createResultTable();
      return;
    }

    document
      .querySelector(".attempt-section")
      ?.append(createAttempt(base, length, gameState));
  });
  attemptResultSection.append(checkButton);
  attempt.append(guessSection, errorMessage, attemptResultSection);
  return attempt;
}
function createDots(count: number, className: string): HTMLSpanElement[] {
  return Array.from({ length: count }, () => {
    const dot = document.createElement("span");
    dot.classList.add("result-dot", className);
    return dot;
  });
}
function renderAttemptResult(
  attemptResultSection: HTMLDivElement,
  bulls: number,
  cows: number,
): void {
  const bullsDots = createDots(bulls, "bull");
  const cowsDots = createDots(cows, "cow");

  attemptResultSection.replaceChildren(...bullsDots, ...cowsDots);
}
