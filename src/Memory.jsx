import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function Memory() {
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

    const shufflePokemon = () => {
        let array = [...pokemonFinal];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setPokemonFinal(array);
    };

    return (
        <>
            {pokemonFinal.length > 0 && (
                <div id="container">
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[0].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[0].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[1].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[1].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[2].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[2].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[3].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[3].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[4].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[4].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[5].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[5].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[6].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[6].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[7].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[7].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[8].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[8].name}</h1>
                        </div>
                    </div>

                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[9].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[9].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[10].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[10].name}</h1>
                        </div>
                    </div>
                    <div id="div-card" onClick={shufflePokemon}>
                        <div id="div-img">
                            <img src={pokemonFinal[11].image} alt="" />
                        </div>
                        <div id="div-text">
                            <h1>{pokemonFinal[11].name}</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Memory;
