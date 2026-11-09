import { getResults } from "../game/storage";
import { renderSettings } from "./Settings";
export function createResultTable() {
    const previousResults = getResults();
    const panel = document.createElement("div");
    panel.classList.add("result-panel");
    const currResult = document.createElement("div");
    currResult.classList.add("current-result");
    const resultTable = document.createElement("table");
    resultTable.classList.add("result-table");
    const newGameBtn = document.createElement("button");
    newGameBtn.classList.add("new-game-btn");
    newGameBtn.textContent = "New game";
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["#", "Attempts", "Time", "System", "Length"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.append(th);
    });
    tableHeader.append(headerRow);
    resultTable.append(tableHeader);
    const tableBody = document.createElement("tbody");
    previousResults.forEach((res, index) => {
        const row = document.createElement("tr");
        const values = [
            String(index + 1),
            String(res.guesses),
            `${Math.floor(res.duration / 60000)} min ${Math.floor((res.duration % 60000) / 1000)} sec`,
            String(res.base),
            String(res.length),
        ];
        values.forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.append(cell);
        });
        tableBody.append(row);
    });
    resultTable.append(tableBody);
    currResult.textContent = "You won!";
    newGameBtn.addEventListener("click", () => {
        document.querySelector(".game")?.remove();
        renderSettings();
    });
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal__overlay");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    panel.append(currResult, resultTable, newGameBtn);
    modal.append(panel, modalOverlay);
    document.body.append(modal);
}
