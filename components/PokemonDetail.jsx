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

  const setTypeColor = (type) => {
    switch(type){
      case 'normal': return '#AAAA99';
      case 'fire': return '#FF4422';
      case 'water': return '#3399FF';
      case 'electric': return '#FFCC33';
      case 'grass': return '#5FA344';
      case 'ice': return '#66CCFF';
      case 'fighting': return '#9F483A';
      case 'poison': return '#A95598';
      case 'ground': return '#D7B653';
      case 'flying': return '#8899FF';
      case 'psychic': return '#FF5599';
      case 'bug': return '#AABB22';
      case 'rock': return '#BBAA66';
      case 'ghost': return '#6666BA';
      case 'dragon': return '#7766EE';
      case 'dark': return '#775544';
      case 'steel': return '#AAAABB';
      case 'fairy': return '#EE99EE';
    }
  }

  const displayTypes = () => {
    if(pokemon.types === undefined) return <div></div>
    else{ 
      return <div>
        <div className="type-square" style={{background: setTypeColor(pokemon.types[0].type.name)}}>
          <p>{pokemon.types[0].type.name} </p>
        </div>
        <div className="type-square" style={{background: setTypeColor(pokemon.types[1]?.type.name)}}>
          <p>{pokemon.types[1]?.type.name}</p>
        </div>
      </div>
    }
  }


  const displayStats = () => {
    if(pokemon.stats === undefined) return <div> </div> 
    else {
      return <div className='stat-container'>
        <div className="stat-square">
          <h3>Hp </h3> <p> {pokemon.stats[0].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Attack </h3> <p> {pokemon.stats[1].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Defense </h3> <p> {pokemon.stats[2].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Sp. Attack </h3> <p> {pokemon.stats[3].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Sp. Defense </h3> <p> {pokemon.stats[4].base_stat}</p>
        </div>

        <div className="stat-square">
          <h3>Speed </h3> <p> {pokemon.stats[5].base_stat}</p>
        </div>
      </div>
    } 
  }


  return (
    <div className='pokemon-detail'>
      <div className="basic-poke-info">
        <h1 className='pokename'> {pokemon.name} <h2 className='pokenumber '>#{pokemon.id}</h2> </h1>
        <img className='sprite' src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />

        <div className="pokemon-wh">
          <p>{pokemon.height}</p>
          <hr style={{width: 60}}/>
          <h3>Height</h3>
        </div>

        <div className="pokemon-wh">
          <p>{pokemon.weight}</p>
          <hr style={{width: 60}}/>
          <h3>Weight</h3>
        </div>

      </div>

      <div className="poke-type">
        <h1>Type</h1>
        <hr style={{width: 300}}/>
        {displayTypes()}
      </div>

      <div className="poke-stats">
        {displayStats()}
      </div>
    </div>
  );
};

export default PokemonDetail;