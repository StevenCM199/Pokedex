import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../src/store/slices/pokeName.slice";

const UserInput = () => {

  const dispatch = useDispatch();
  const [pokeName, setPokeName] = useState("");
  const navigate = useNavigate(); 

  const dispatchPokeName = () => {
    dispatch(changeName(pokeName)); 
    navigate('/pokedex');
  }


  return (
    <div className="trainer-name">
      <h1>Enter your name, trainer!</h1>
      <img className="red-png" src="https://i.pinimg.com/originals/cf/9c/0a/cf9c0a845520e3a30673b8e32fc4ba8d.png" alt="" />
      <input 
        type="text" 
        value= {pokeName}
        onChange = {(e) => setPokeName(e.target.value)}
      />
      <button onClick={dispatchPokeName}>Enter</button>
    </div>
  );
};

export default UserInput;
