import { useReducer, useState } from 'react';
import PokemonCards from './PokemonCards.js';
import PokemonDeck from './PokemonDeck.js';

const swapPokemon = (state, swap) => {
  switch (swap.player) {
    case 'player1':
      return [swap.pokeId, state[1]];
    case 'player2':
      return [state[0], swap.pokeId];
    default:
      return [0, 0];
  }
};

const Button = ({ winner, pokemonIds, onClick }) => {
  return (
    <button
      disabled={winner === pokemonIds[0]}
      onClick={() =>
        onClick((prevWinner) =>
          prevWinner === pokemonIds[0] ? pokemonIds[1] : pokemonIds[0]
        )
      }
    >
      player1 attack
    </button>
  );
};

const PokemonGame = (props) => {
  const [pokemonIds, setPokemonIds] = useReducer(swapPokemon, []);
  const [player1Pokemon, setPlayer1Pokemon] = useState([1, 4, 3]);
  const [player2Pokemon, setPlayer2Pokemon] = useState([2, 5, 8]);
  const [winner, setWinner] = useState(null);

  return (
    <div className="board">
      <PokemonDeck
        pokemonIds={player1Pokemon}
        onClick={setPokemonIds}
        playerID="player1"
      />
      <div className="war-ground">
        <PokemonCards pokemonIds={pokemonIds} winner={winner} />
        <h3 style={{ textAlign: 'center' }}>Attack won by {winner}</h3>
        <div className="actions">
          <Button winner={winner} pokemonIds={pokemonIds} onClick={setWinner} />
          <button
            disabled={winner === pokemonIds[1]}
            onClick={() =>
              setWinner((prevWinner) =>
                prevWinner === pokemonIds[0] ? pokemonIds[1] : pokemonIds[0]
              )
            }
          >
            player2 attack
          </button>
        </div>
      </div>
      <PokemonDeck
        pokemonIds={player2Pokemon}
        onClick={setPokemonIds}
        playerID="player2"
      />
    </div>
  );
};

export default PokemonGame;
