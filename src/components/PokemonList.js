import React, { useState } from 'react'
import PokemonCard from './PokemonCard'
import BasicModal from './PokemonDetailsCard'
import { useEffect } from 'react';

  const PokemonList = ({ pokemonData, filterPokemon }) => {

    const [pokemonCards, setPokemonCards] = useState("");
    
    const filteredData = pokemonData.filter(pokemon => {
      console.log(pokemonData);
      if (filterPokemon === "") return pokemon;
      return pokemon.name.toLowerCase().includes(filterPokemon);
    });
  
    useEffect(() => {
      setTimeout(() => {
        const pokemonCards = filteredData.map(pokemon => (
          <BasicModal key={pokemon.id} PokemonObject={<PokemonCard pokemon={pokemon} />} />
        ));
        setPokemonCards(pokemonCards);
      }, 1000);
    }, [filteredData]);
  
    return (
      <div className="PokemonList">
        {pokemonCards.length > 0 ? pokemonCards : "Kein Pokémon gefunden"}
      </div>
      
    );
  };
export default PokemonList;


