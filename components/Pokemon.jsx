import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";


const Pokemon = () => {

  const navigate = useNavigate(); 

  //States
  const name = useSelector((state) => state.pokeName);
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ typesList, setTypesList ] = useState([]);
  const [ nameInput, setNameInput ] = useState('');

  const [ page, setPage ] = useState(1);


  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1155')
      .then(res => setPokemonList(res.data.results)); 

    axios
      .get('https://pokeapi.co/api/v2/type')
      .then(res => setTypesList(res.data.results));

  }, [])

  const searchPokemon = () => {
    navigate(
      `/pokedex/${nameInput}`
    );
  }

  const searchTypes = (typeUrl) => {
    axios.get(typeUrl).then((res) => setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon)));
  }


  //Pagination variables
  const pokesPerPage = 16;
  const lastPokeIndex = page * pokesPerPage; //15
  const firstPokeIndex = lastPokeIndex - pokesPerPage; //10
  const pagesDisplayed = 10;
  let pokesPaginated = []; 

  let typeSelected = false;

  if(typeSelected){
      pokesPaginated = pokePerType.slice(
      firstPokeIndex,
      lastPokeIndex
    ); 
  } else {
      pokesPaginated = pokemonList.slice(
      firstPokeIndex,
      lastPokeIndex
    ); 
  }

  const totalPages = Math.ceil(pokemonList.length / pokesPerPage); 
  const pagesNumbers = []; 
  for(let i = 1; i <= totalPages; i++ ){
    pagesNumbers.push(i); 
  }

  const changePage = ({ selected }) => {
    setPage(selected);
  }

  return (
    <div>
      <div className="pokedex-upper">
        <h1>Pokedex</h1>
        <p>Welcome {name}</p>

        <div className="search-bar">
          <input
            type="text" 
            placeholder="search via name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button onClick={searchPokemon}> Search </button>
        </div>

        <div>
          <select title="Select a type"
            onChange={(e) => searchTypes(e.target.value)}>
            <option value=""> Search via type </option>
            {typesList.map((type) => (
              <option value={type.url} key={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="pokemon-container">
        {pokesPaginated.map((pokemon) => (
          <PokemonCard 
            url = {pokemon.url ? pokemon.url : pokemon} 
            key ={pokemon.name ? pokemon.name : pokemon} 
          />
        ))}
      </div>

      <div className="pokedex-lower">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
        />
      </div>
      
    </div>
  );
};

export default Pokemon;
