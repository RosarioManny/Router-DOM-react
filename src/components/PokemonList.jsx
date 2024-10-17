const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
          {props.pokemon.map((currentPokemon) => (
            <li key={currentPokemon._id}>{currentPokemon.name}</li>
          ))}
        </ul>
      </>
    );
};
  
  export default PokemonList;
  