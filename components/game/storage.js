const STORAGE_KEY = "bulls-and-cows-records";
export function saveResult(result) {
    const savedResults = getResults();
    const updatedResults = getTopResults([...savedResults, result]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
}
export function getResults() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data)
        return [];
    try {
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed))
            return [];
        return parsed;
    }
    catch {
        return [];
    }
}
function getTopResults(results) {
    return [...results]
        .sort((a, b) => {
        if (a.guesses !== b.guesses) {
            return a.guesses - b.guesses;
        }
        return a.duration - b.duration;
    })
        .slice(0, 10);
}
