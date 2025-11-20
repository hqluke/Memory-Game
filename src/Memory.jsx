import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function Memory() {
    const [count, setCount] = useState(0);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonFinal, setPokemonFinal] = useState([]);

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

    useEffect(() => {
        console.log("Updated pokemonFinal:", pokemonFinal);
    }, [pokemonFinal]);
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + diddy</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default Memory;
