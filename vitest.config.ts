import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/bulls-and-cows/",
  test: {
    passWithNoTests: true,
    include: ["tests/**/*.test.ts"],
  },
});
