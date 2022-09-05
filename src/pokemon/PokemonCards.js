import React from 'react';
import PokemonCard from './PokemonCard.js';

const PokemonCards = ({ pokemonIds, winner }) => {
  const pokemons = pokemonIds.map((pokemonId) => (
    <PokemonCard
      key={+pokemonId}
      pokemonId={pokemonId}
      winner={winner === pokemonId ? true : false}
    />
  ));
  return (
    <div
      key={100}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {pokemons}
    </div>
  );
};

export default PokemonCards;
