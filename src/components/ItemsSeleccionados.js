import React from "react";
import { useNameContext } from "../context/NamesContext";

export default function ItemsSeleccionados() {
  const { character, eliminarUno, borraTodos } = useNameContext();
  return (
    <div>
      <h1>No hay items seleccionados</h1>
	  <button onClick={borraTodos}>borrarTodo</button>
      {character.map((el) => (
        <div key={el.nombre}>
          <h2>{el.nombre}</h2>
          <p>{el.quantity}</p>
          <button onClick={() => eliminarUno(el.nombre)}>eliminar</button>
        </div>
      ))}
    </div>
  );
}
