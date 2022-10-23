import { useState } from "react";
import React from "react";
import "./Home.css";
import "./Home.css";

function Home() {
  const [listaTareas, setListaTareas] = useState(() => {
    try {
      const item = window.localStorage.getItem("tareas");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  console.log(listaTareas);

  let color = "";
  if (listaTareas.length != 0) {
    color = "blue";
  } else {
    color = "red";
  }

  return (
    <>
      <h1>Home</h1>
      <h2>
        Haz click en el Navbar para dirigirte a la PokeAPI o a la
        <span style={{ color: color }}> ToDoList</span> (rojo si está vacía o
        azul si está llena).
      </h2>
    </>
  );
}

export default Home;
