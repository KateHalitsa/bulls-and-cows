import { GameResult } from "../../types/types";

const STORAGE_KEY = "bulls-and-cows-records";

export function saveResult(result: GameResult): void {
  const savedResults = getResults();

  const updatedResults = getTopResults([...savedResults, result]);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
}
export function getResults(): GameResult[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    const parsed: unknown = JSON.parse(data);

    if (!Array.isArray(parsed)) return [];

    return parsed as GameResult[];
  } catch {
    return [];
  }
}
function getTopResults(results: GameResult[]): GameResult[] {
  return [...results]
    .sort((a, b) => {
      if (a.guesses !== b.guesses) {
        return a.guesses - b.guesses;
      }

      return a.duration - b.duration;
    })
    .slice(0, 10);
}
