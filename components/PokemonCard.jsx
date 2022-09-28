import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

  const [ pokemon, setPokemon ] = useState([]); 
  const navigate = useNavigate(); 

  //console.log(url); 

  useEffect(() => {
  axios
    .get(url)
    .then(res => setPokemon(res.data));
  }, [])

  
  return (
    <div className='PokemonCard' onClick={()=> navigate(`/pokedex/${pokemon.name}`)}>
      {pokemon.name}
      <br />
      <img className='pokemon-image' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default PokemonCard;