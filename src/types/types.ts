export type Hint = {
  bulls: number;
  cows: number;
};
export type GameResult = {
  id: string;
  guesses: number;
  duration: number;
  base: number;
  length: number;
  date: string;
};
export interface GameState {
  secret: string;
  guesses: number;
  usedGuesses: Set<string>;
  finished: boolean;
}
export const maxString = "0123456789abcdef";
