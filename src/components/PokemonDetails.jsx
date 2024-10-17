import { useParams } from 'react-router-dom'

const PokemonDetails = (props) => {
    console.log(props); // Always verify that any prop are being passed correctly!
    // vv This uses the slug of the url
    const { pokemonId } = useParams();
    const currentPokemon = props.pokemon.find( poke => poke._id === Number(pokemonId))
    console.log(currentPokemon)
    return (
        <>
      <h2>{currentPokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{currentPokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{currentPokemon.height}</dd>
      </dl>
    </> 
    );
};

export default PokemonDetails;