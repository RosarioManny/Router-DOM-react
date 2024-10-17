import { Link } from 'react-router-dom'


const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemon.map((currentPokemon) => (
            <Link key={currentPokemon._id} to={`/pokemon/${currentPokemon._id}`}>
                <li >{currentPokemon.name}</li>
            </Link>
          ))}
        </ul>
      </>
    );
};
  
  export default PokemonList;
  