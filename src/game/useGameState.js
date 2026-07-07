import { useState, useEffect } from "react";
import animeList from "../data/animeList.json";
import compareAnime from "./compareAnime";

export function useGameState() {
    const [target, setTarget] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [won, setWon] = useState(false);
    const [revealed, setRevealed] = useState(false); // gave up flag

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        setTarget(animeList[randomIndex]);
    }, []);

    function makeGuess(anime) {
        if (won || revealed || !target) return;

        const result = compareAnime(anime, target);
        setGuesses((prev) => [{ anime, result }, ...prev]);

        if (anime.id === target.id) {
            setWon(true);
        }
    }

    function giveUp() {
        if (won || !target) return;
        setRevealed(true);
    }

    function resetGame() {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        setTarget(animeList[randomIndex]);
        setGuesses([]);
        setWon(false);
        setRevealed(false);
    }

    return { target, guesses, won, revealed, makeGuess, giveUp, resetGame };
}