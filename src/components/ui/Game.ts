import { GameState } from "../../types/types";
import { generateSecret } from "../algorithms/generateSecret";
import { createAttempt } from "./Attempt";

export function renderGame(selectedBase: number, selectedLength: number): void {
  document.querySelector(".setting-panel")?.remove();
  const secret = generateSecret(selectedLength, selectedBase);
  const gameState: GameState = { secret: secret, guesses: 0 };
  const main = document.createElement("main");
  main.classList.add("game");

  const title = document.createElement("h1");
  title.textContent = "Bulls and Cows";

  const startTime = Date.now();
  const firstAttempt = createAttempt(
    selectedBase,
    selectedLength,
    gameState,
    startTime,
  );

  const attemptSection = document.createElement("div");
  attemptSection.classList.add("attempt-section");

  attemptSection.append(firstAttempt);

  main.append(title, attemptSection);
  document.body.append(main);
}
