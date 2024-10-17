import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
// Data
import InitialState from './InitialState'
// Components
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from "./components/PokemonForm";

const App = () => {
  const [pokemon, setPokemon] = useState(InitialState);
  const addPokemon = (newPokemonData) => {
    // vv This is checking how many pkmn we have and creating a new id for it. 
    newPokemonData._id = pokemon.lenght + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/pokemon' element={ <PokemonList pokemon={pokemon} />} />
        <Route 
        path='/pokemon/new' 
        element={ <PokemonForm addPokemon={addPokemon}/> } 
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path='*' element={<h2>Whoops Nothing Here!</h2>} />
      </Routes>
  
    </>
  );
};

export default App;
