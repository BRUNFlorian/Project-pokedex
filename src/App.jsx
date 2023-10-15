import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
    imgSrc: null,
  },
];

function App() {
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      pokemonIndex = pokemonIndex - 1;
    } else {
      pokemonIndex = pokemonList.length - 1;
    }
    setpokemonIndex(pokemonIndex);
  };
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      pokemonIndex = pokemonIndex + 1;
    } else {
      pokemonIndex = 0;
    }
    setpokemonIndex(pokemonIndex);
  };

  let [pokemonIndex, setpokemonIndex] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList} pokemonIndex={pokemonIndex} />
      <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </div>
  );
}

export default App;
