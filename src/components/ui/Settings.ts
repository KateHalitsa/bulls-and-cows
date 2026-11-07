import { renderGame } from "./Game";

const systems = [
  { label: "Binary (2)", value: 2 },
  { label: "Octal (8)", value: 8 },
  { label: "Decimal (10)", value: 10 },
  { label: "Hexadecimal (16)", value: 16 },
];
let selectedBase = 10;

export function renderSettings() {
  const panel = document.createElement("div");
  panel.classList.add("setting-panel");

  const definesystemSelection = document.createElement("div");
  definesystemSelection.classList.add("define-system-selection");
  const whatToDoWithSystems = document.createElement("p");
  whatToDoWithSystems.textContent = "Choose numeral system:";
  definesystemSelection.append(whatToDoWithSystems);

  const systemSelection = document.createElement("div");
  systemSelection.classList.add("system-selection");
  systems.forEach((system) => {
    systemSelection.append(createSystemButton(system, selectedBase));
  });

  const defineLength = document.createElement("div");
  defineLength.classList.add("define-length");
  const whatToDoWithLength = document.createElement("p");
  whatToDoWithLength.textContent = "Choose length of a secret number:";

  defineLength.append(whatToDoWithLength);

  const slider = document.createElement("input");
  const sliderValue = document.createElement("p");
  slider.type = "range";
  slider.min = "2";
  slider.max = "6";
  slider.step = "1";
  slider.value = "4";
  sliderValue.textContent = `Secret length: ${slider.value}`;

  const startGameBtn = document.createElement("button");
  startGameBtn.classList.add("start-game-btn");
  startGameBtn.textContent = "Start game";
  startGameBtn.addEventListener("click", () => {
    renderGame(selectedBase, Number(slider.value));
  });
  systemSelection.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const base = Number(event.target.dataset.base);
    selectedBase = base;
    if (selectedBase === 2) {
      slider.hidden = true;
      sliderValue.hidden = true;
      slider.value = "2";
    } else {
      slider.hidden = false;
      sliderValue.hidden = false;
    }

    systemSelection.querySelector(".selected")?.classList.remove("selected");
    event.target.classList.add("selected");
  });
  slider.addEventListener("input", () => {
    const selectedLength = Number(slider.value);
    sliderValue.textContent = `Secret length: ${selectedLength}`;
  });
  definesystemSelection.append(systemSelection);
  defineLength.append(slider, sliderValue);
  panel.append(definesystemSelection, defineLength, startGameBtn);
  document.body.append(panel);
}
function createSystemButton(
  system: (typeof systems)[number],
  selectedBase: number,
): HTMLButtonElement {
  const button = document.createElement("button");

  button.type = "button";
  button.textContent = system.label;
  button.dataset.base = String(system.value);
  button.classList.add("system-selection__button");

  if (system.value === selectedBase) {
    button.classList.add("selected");
  }

  return button;
}
