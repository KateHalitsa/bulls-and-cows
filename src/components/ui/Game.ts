export function renderGame(selectedBase: number, selectedLength: number): void {
  document.querySelector(".setting-panel")?.remove();

  const main = document.createElement("main");
  main.classList.add("game");

  const title = document.createElement("h1");
  title.textContent = "Bulls and Cows" + `${selectedBase},${selectedLength}`;

  main.append(title);
  document.body.append(main);
}
