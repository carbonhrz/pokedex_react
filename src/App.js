import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import SearchAppBar from './components/Searchbar';

const App = () =>  {
 
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon, setfilteredPokemon] = useState("");
  const [pokemon_number, setPokemonNumber] = useState(50);

 
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemon_number}`)
      .then(res => {
        const { results } = res.data;
        const pokemonList = [];
        results.forEach((pokemon, index) => {
          axios.get(pokemon.url)
            .then(res => {
              const data = res.data;
              
              pokemonList[index] = {
                id: index + 1,
                name: data.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                type: data.types[0].type.name,
                details: data,
              };
              setPokemonData(pokemonList);
            })
            .catch(error => {
              console.error(error);
            });
            
        });
      })
      .catch(error => {
        console.error(error);
      });
      
  }, [pokemon_number]);
 
 return (
  <div className="App">
    {console.log(pokemonData)}
    {console.log(filteredPokemon)}
    
    <SearchAppBar filter={setfilteredPokemon} pokemon_number={pokemon_number} setPokemonNumber={setPokemonNumber}/>
    <PokemonList pokemonData={pokemonData} filterPokemon={filteredPokemon.toLowerCase()}/>
  </div>
)};

export default App;
