const cache = new Map<string, number>();

export function countPossibleSecrets(length: number, base: number): number {
  if (length > base) {
    throw new Error(
      `Не может быть строки длиной ${length} в системе счисления из ${base} символов`,
    );
  }
  if (length === 0) return 1;
  const key = `${length}-${base}`;

  if (cache.has(key)) {
    return cache.get(key)!;
  }

  const result = base * countPossibleSecrets(length - 1, base - 1);
  cache.set(key, result);

  return result;
}
