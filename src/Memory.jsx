import { useState } from "react";
import "./Memory.css";
import { useEffect } from "react";

function Memory() {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonFinal, setPokemonFinal] = useState([]);

    const [pokemonFullArray, setPokemonFullArray] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [firstShuffle, setFirstShuffle] = useState(true);

    // Fetch initial Pokemon list
    const fetchPokemon = async () => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=12",
        );
        const data = await response.json();
        setPokemonData(data.results);
    };

    // Fetch details for each Pokemon
    const fetchPokemonDetails = async (pokemonList) => {
        const promises = pokemonList.map(async (poke) => {
            const response = await fetch(poke.url);
            const data = await response.json();
            return {
                name: data.name,
                image: data.sprites.front_default,
                url: poke.url,
            };
        });

        const results = await Promise.all(promises);
        setPokemonFinal(results);
    };

    // Initial fetch
    useEffect(() => {
        fetchPokemon();
    }, []);

    // Fetch details when pokemonData changes
    useEffect(() => {
        if (pokemonData.length > 0) {
            console.log("Updated pokemon array:", pokemonData);
            fetchPokemonDetails(pokemonData);
        }
    }, [pokemonData]);

    function shufflePokemon(num) {
        let array = [...pokemonFinal];
        let currPokemon = array[num].name;
        if (pokemonFullArray.includes(currPokemon)) {
            if (score > highScore) {
                setHighScore(score);
            }
            setScore(0);
            setPokemonFullArray([]);
        } else {
            const newScore = score + 1;
            setScore(newScore);
        }

        setPokemonFullArray((prev) => [...prev, currPokemon]);
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setPokemonFinal(array);
    }

    useEffect(() => {
        if (firstShuffle === true && pokemonFinal.length === 12) {
            shufflePokemon(0);
            setFirstShuffle(false);
            setScore(0);
        }
    }, [firstShuffle, pokemonFinal]);

    return (
        <>
            {pokemonFinal.length > 0 && (
                <div className="container">
                    <div className="top">
                        <h1>Memory Game</h1>
                        <p>Select the cards you haven't already pressed</p>
                    </div>
                    <div className="div-scores">
                        <div className="div-normal-score">
                            <p>Current Score: {score}</p>
                        </div>
                        <div className="div-high-score">
                            <p>High Score: {highScore}</p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(0)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[0].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[0].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(1)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[1].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[1].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(2)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[2].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[2].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(3)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[3].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[3].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(4)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[4].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[4].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(5)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[5].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[5].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(6)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[6].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[6].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(7)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[7].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[7].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(8)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[8].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[8].name}</h1>
                            </div>
                        </div>

                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(9)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[9].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[9].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(10)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[10].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[10].name}</h1>
                            </div>
                        </div>
                        <div
                            className="div-card"
                            onClick={() => shufflePokemon(11)}
                        >
                            <div className="div-img">
                                <img src={pokemonFinal[11].image} alt="" />
                            </div>
                            <div className="div-text">
                                <h1>{pokemonFinal[11].name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Memory;
