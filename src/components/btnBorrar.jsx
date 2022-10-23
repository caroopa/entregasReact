import React from "react";

const BtnBorrar = (props) => {
  const { borrar } = props;

  return (
    <button className="btnBorrar" onClick={borrar}>
      Borrar Todo
    </button>
  );
};

export default BtnBorrar;
