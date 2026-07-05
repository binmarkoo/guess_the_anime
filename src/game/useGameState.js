import { useState, useEffect } from "react";
import animeList from "../data/animeList.json";
import compareAnime from "./compareAnime";

export function useGameState() {
    const [target, setTarget] = useState(null);   // the secret anime
    const [guesses, setGuesses] = useState([]);   // all guesses so far
    const [won, setWon] = useState(false);        // win flag

    // pick a random target once, when the game starts
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        setTarget(animeList[randomIndex]);
    }, []);

    function makeGuess(anime) {
        if (won || !target) return;

        const result = compareAnime(anime, target);
        setGuesses((prev) => [{ anime, result }, ...prev]);

        if (anime.id === target.id) {
            setWon(true);
        }
    }

    // start a fresh game
    function resetGame() {
        const randomIndex = Math.floor(Math.random() * animeList.length);
        setTarget(animeList[randomIndex]);
        setGuesses([]);
        setWon(false);
    }

    return { target, guesses, won, makeGuess, resetGame };
}