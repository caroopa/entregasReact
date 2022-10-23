import React from "react";

const Tarea = (props) => {
  const { tarea } = props;

  return (
    <div className="tarea">
      <span>{tarea.tarea}</span>
    </div>
  );
};

export default Tarea;
