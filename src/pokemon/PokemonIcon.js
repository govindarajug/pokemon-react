import React, { useEffect, useState } from 'react';

const PokemonDetails = ({ Id, name, imageUrl, types, onClick, playerID }) => {
  return (
    <div
      className={types[0].concat(' icon')}
      onClick={() => onClick({ player: playerID, pokeId: Id })}
    >
      <img src={imageUrl} alt={name} />
    </div>
  );
};

const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`/getPokemon/${pokemonId}`)
      .then((x) => x.json())
      .then(({ id, name, imageUrl, types }) =>
        setPokemon({ id, name, imageUrl, types })
      );
  }, []);
  return pokemon;
};

const PokemonIcon = ({ pokemonId, onClick, playerID }) => {
  const pokemon = usePokemon(pokemonId);
  return pokemon === null ? (
    <p>Loading...</p>
  ) : (
    <PokemonDetails
      Id={pokemon.id}
      name={pokemon.name}
      imageUrl={pokemon.imageUrl}
      types={pokemon.types}
      onClick={onClick}
      playerID={playerID}
    />
  );
};

export default PokemonIcon;
