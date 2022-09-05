const express = require('express');
const app = express();
const fs = require('fs');

const pokemons = JSON.parse(fs.readFileSync('./src/pokemon.json', 'utf-8'));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/getAllPokemon', (req, res) => {
  res.json(pokemons);
});

app.get('/getPokemon/:id', (req, res) => {
  const pokemonId = req.params.id;
  res.json(pokemons[pokemonId]);
});

app.use(express.static('build'));

app.listen(8002, () => console.log('listening on 8002'));
