import PokemonList from "./components/PokemonList";
import { useState } from 'react'
import InitialState from './InitialState'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [pokemon, setPokemon] = useState(InitialState);
  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path='/pokemon' element={ <PokemonList pokemon={pokemon} />} />
      </Routes>
  
    </>
  );
};

export default App;
