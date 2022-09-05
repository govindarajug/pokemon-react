import React, { useEffect, useState } from 'react';

const PokemonDetails = ({ name, imageUrl, attack, defense, winner }) => (
  <div
    style={{
      width: '280px',
      height: '350px',
      border: '1px solid lightgrey',
      borderRadius: '5px',
      textAlign: 'center',
      padding: '10px',
      margin: '5px',
    }}
    className={winner ? 'winner' : ''}
  >
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <table>
      <tbody>
        <tr>
          <th>attack</th>
          <td>{attack}</td>
        </tr>
        <tr>
          <th>defense</th>
          <td>{defense}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`/getPokemon/${pokemonId}`)
      .then((x) => x.json())
      .then(({ name, imageUrl, attack, defense }) =>
        setPokemon({ name, imageUrl, attack, defense })
      );
  }, []);
  return pokemon;
};

const PokemonCard = ({ pokemonId, winner }) => {
  const pokemon = usePokemon(pokemonId);
  return pokemon === null ? (
    <p>Loading...</p>
  ) : (
    <PokemonDetails
      name={pokemon.name}
      imageUrl={pokemon.imageUrl}
      attack={pokemon.attack}
      defense={pokemon.defense}
      winner={winner}
    />
  );
};

export default PokemonCard;
