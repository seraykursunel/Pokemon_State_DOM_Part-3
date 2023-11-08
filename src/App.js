import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const filterPokemon = pokemons.filter((pokemon) =>
    pokemon.name.trim().toLowerCase().includes(value.trim().toLowerCase())
  );

  const showPokemon = filterPokemon.map((pokemon) => {
    return (
      <CardItem
        key={pokemon.name}
        name={pokemon.name}
        sprite={pokemon.sprite}
      />
    );
  });

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input type="text" onChange={onChange} value={value}></input>
      <div className="cards">{showPokemon}</div>
    </div>
  );
}
