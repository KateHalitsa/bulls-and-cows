function generateSecret(length, base, random = Math.random) {
    const hex = "0123456789ABCDEF";
    const notation = hex.slice(0, base);
    if (length > base) {
        throw new Error(`Невозможно сгенерировать строку длиной ${length} в системе счисления из ${base} символов`);
    }
    const uniqueChars = new Set();
    let attempts = 0;
    while (uniqueChars.size < length) {
        attempts++;
        if (attempts > 1000) {
            throw new Error("Превышено количество попыток.");
        }
        const val = random();
        const charIndex = Math.floor(val * notation.length);
        const char = notation[charIndex];
        if (char) {
            uniqueChars.add(char);
        }
    }
    return Array.from(uniqueChars).join("");
}
function notImplemented() {
    throw new Error("Функция не реализована");
}
export { generateSecret, notImplemented };
