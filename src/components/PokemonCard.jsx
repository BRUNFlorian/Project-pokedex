import React from "react";
import PropTypes from "prop-types";
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
