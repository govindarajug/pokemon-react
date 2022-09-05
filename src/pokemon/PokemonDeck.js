import React from 'react';
import PokemonIcon from './PokemonIcon.js';

const PokemonDeck = ({ pokemonIds, onClick, playerID }) => {
  const pokemons = pokemonIds.map((pokemonId) => (
    <PokemonIcon
      key={pokemonId}
      pokemonId={pokemonId}
      onClick={onClick}
      playerID={playerID}
    />
  ));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {pokemons}
    </div>
  );
};

export default PokemonDeck;
