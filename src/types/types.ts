export type Hint = {
  bulls: number;
  cows: number;
};
export interface GameState {
  secret: string;
  guesses: number;
}
export const maxString = "0123456789abcdef";
