import React from "react";

function PokemonCard(props) {
  const pokemon = props.pokemon[0];

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
}

export default PokemonCard;
