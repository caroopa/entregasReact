import React from "react";

const Formulario = (props) => {
  const { tarea, formOnSubmit, formOnChange } = props;

  return (
    <form onSubmit={formOnSubmit}>
      <input
        type="text"
        placeholder="Introduce una tarea"
        onChange={formOnChange}
        value={tarea}
      />
      <input
        type="submit"
        className="btnAgregar"
        value="Agregar"
        onClick={formOnSubmit}
      />
    </form>
  );
};

export default Formulario;
