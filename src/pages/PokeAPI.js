import { useState } from "react";
import React from "react";
import "./PokeAPI.css";

function PokeAPI() {
  const [poke, setPoke] = useState();
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const fetchApi = async (pokemon) => {
    try {
      const response = await fetch(url + pokemon);
      const json = await response.json();
      return json;
    } catch (err) {
      return alert("Pokémon inválido.");
    }
  };

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchApi(search);
    setPoke(data);
  };

  return (
    <>
      <h1>PokeAPI</h1>

      <div className="container2">
        <form className="form">
          <input onChange={onChange} placeholder="Ingresa un pokémon" />
          <input
            type="submit"
            onClick={onSubmit}
            value="Enviar"
            className="submitPoke"
          />
        </form>
        {!poke ? (
          <h3>"Esperando pokemon..."</h3>
        ) : (
          <div className="cardPoke">
            <h3>{poke.name}</h3>
            <img src={poke.sprites.front_default} alt="" />
            <p>Peso: {poke.weight}</p>
            <p>Experiencia base: {poke.base_experience}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PokeAPI;
