import React from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

const PokemonDetail = () => {

  const { Pname } = useParams(); 
  const [ pokemon, setPokemon ] = useState({}); 

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${Pname}`)
      .then(res => setPokemon(res.data));
    }, [])

  const displayTypes = () => {
    if(pokemon.types === undefined) return <div></div>
    else{ 
      return <div>
        <div className="type-square">
          {pokemon.types[0].type.name} 
        </div>
        <div className="type-square">
          {pokemon.types[1]?.type.name} 
        </div>
      </div>
    }
  }

  const displayStats = () => {
    if(pokemon.stats === undefined) return <div> </div> 
    else {
      return <div>
        <div className="stat-square">
          <h3>Hp: </h3> <p> {pokemon.stats[0].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Attack: </h3> <p> {pokemon.stats[1].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Defense: </h3> <p> {pokemon.stats[2].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Sp. Attack: </h3> <p> {pokemon.stats[3].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Sp. Defense: </h3> <p> {pokemon.stats[4].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Speed: </h3> <p> {pokemon.stats[5].base_stat}</p>
        </div>
      </div>
    } 
  }


  return (
    <div>
      <div className="basic-poke-info">
        <h1> {pokemon.name} </h1>
        <h2> #{pokemon.id}</h2>
        <img src={pokemon.sprites?.front_default} alt="" />

        <div className="pokemon-wh">
          <p>{pokemon.height}</p>
          <hr style={{width: 60}}/>
          <h3>Height</h3>

          <p>{pokemon.weight}</p>
          <hr style={{width: 60}}/>
          <h3>Weight</h3>
        </div>

      </div>

      <div className="poke-type">
        <h1>Type</h1>
        <hr style={{width: 60}}/>
        {displayTypes()}
      </div>

      <div className="poke-stats">
        {displayStats()}
      </div>
    </div>
  );
};

export default PokemonDetail;