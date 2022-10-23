import { useState } from "react";
import React from "react";
import Formulario from "../components/Formulario";
import Tarea from "../components/Tarea";
import BtnBorrar from "../components/btnBorrar";

function Home() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(() => {
    try {
      const item = window.localStorage.getItem("tareas");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const formOnSubmit = (e) => {
    e.preventDefault();
    if (tarea === "") {
      alert("No debe estar vacio.");
      return;
    }

    const nuevaTarea = {
      tarea: tarea,
    };

    listaTareas.push(nuevaTarea);
    setListaTareas(listaTareas);
    setTarea("");
    window.localStorage.setItem("tareas", JSON.stringify(listaTareas));
  };

  const formOnChange = (e) => {
    setTarea(e.target.value);
  };

  const borrar = () => {
    setListaTareas([]);
    window.localStorage.removeItem("tareas");
  };

  return (
    <div className="main">
      <h1>ToDo List</h1>
      <div className="container">
        <Formulario
          tarea={tarea}
          formOnSubmit={formOnSubmit}
          formOnChange={formOnChange}
        />
        <BtnBorrar borrar={borrar} />
      </div>

      <div className="containerTareas">
        {listaTareas.map((tarea) => (
          <Tarea tarea={tarea} />
        ))}
      </div>
    </div>
  );
}

export default Home;
