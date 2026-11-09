import { generateSecret } from "../algorithms/generateSecret";
import { createAttempt } from "./Attempt";
export function renderGame(selectedBase, selectedLength) {
    document.querySelector(".setting-panel")?.remove();
    const secret = generateSecret(selectedLength, selectedBase);
    const gameState = {
        secret: secret,
        guesses: 0,
        usedGuesses: new Set(),
        finished: false,
    };
    const main = document.createElement("main");
    main.classList.add("game");
    const title = document.createElement("h1");
    const spanBulls = document.createElement("span");
    spanBulls.textContent = "Bulls";
    spanBulls.className = "accent-bulls";
    const and = document.createTextNode(" and");
    const spanCows = document.createElement("span");
    spanCows.textContent = " Cows";
    spanCows.className = "accent-cows";
    title.append(spanBulls, and, spanCows);
    const startTime = Date.now();
    const firstAttempt = createAttempt(selectedBase, selectedLength, gameState, startTime);
    const attemptSection = document.createElement("div");
    attemptSection.classList.add("attempt-section");
    attemptSection.append(firstAttempt);
    main.append(title, attemptSection);
    document.body.append(main);
}
