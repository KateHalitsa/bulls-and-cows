export function createDigitValidator(base) {
    return function (char) {
        return base.toLowerCase().includes(char.toLowerCase());
    };
}
