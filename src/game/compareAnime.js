// Helper 1: for single text values (studio, type, status, season, source)
function compareText(guessValue, targetValue) {
    if (guessValue === targetValue) {
        return "correct"; // green
    }
    return "wrong"; // red
}

// Helper 2: for numbers (score, year, episodes, rank)
function compareNumber(guessValue, targetValue) {
    // if either value is missing, we can't compare -> treat as wrong
    if (guessValue == null || targetValue == null) {
        return "wrong";
    }
    if (guessValue === targetValue) {
        return "correct"; // green
    }
    if (targetValue > guessValue) {
        return "higher"; // target is bigger -> arrow up
    }
    return "lower"; // target is smaller -> arrow down
}

// Helper 3: for lists (genres)
function compareList(guessList, targetList) {
    // how many items appear in BOTH lists?
    const shared = guessList.filter((item) => targetList.includes(item));

    if (shared.length === 0) {
        return "wrong"; // no overlap -> red
    }
    // exactly the same items (same length AND all shared) -> green
    if (shared.length === guessList.length && guessList.length === targetList.length) {
        return "correct";
    }
    // some overlap but not identical -> orange
    return "partial";
}

// The main function that compares a full guess against the target
function compareAnime(guess, target) {
    return {
        studio: compareText(guess.studio, target.studio),
        type: compareText(guess.type, target.type),
        status: compareText(guess.status, target.status),
        season: compareText(guess.season, target.season),
        source: compareText(guess.source, target.source),
        score: compareNumber(guess.score, target.score),
        year: compareNumber(guess.year, target.year),
        episodes: compareNumber(guess.episodes, target.episodes),
        rank: compareNumber(guess.rank, target.rank),
        genres: compareList(guess.genres, target.genres),
    };
}

export default compareAnime;