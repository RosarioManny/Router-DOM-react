import PokemonList from "./components/PokemonList";
import { useState } from 'react'
import InitialState from './InitialState'

const App = () => {
  const [pokemon, setPokemon] = useState(InitialState);
  return (
    <>
      <h1>Pokemon!</h1>
      <PokemonList pokemon={pokemon} />
    </>
  );
};

export default App;
