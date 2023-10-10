import React from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

const pokemon = pokemonList[0];

const PokemonCard = () => {
  const showImg = (pokemon) => {
    if (pokemon.imgSrc === undefined) {
      return <p>???</p>;
    } else {
      return <img src={pokemon.imgSrc} />;
    }
  };

  return (
    <figure>
      {showImg(pokemon)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
