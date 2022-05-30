import { useState } from "react";

function SearchBar({ placeholder, data }) {
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [textoIngresado, setTextoIngresado] = useState("");
  const manejadorEvento = (event) => {
    setTextoIngresado(event.target.value);
    const nuevoFiltroDatos = data.filter((value) => {
      return value.modelo.toLowerCase().includes(textoIngresado.toLowerCase());
    });
    if (event.target.value === "") {
      setDatosFiltrados([]);
    } else {
      setDatosFiltrados(nuevoFiltroDatos);
    }
  };
  return (
    <div className="navbar-center form-control ">
      <div className="input-group">
        <input
          type="text"
          onChange={manejadorEvento}
          placeholder={placeholder}
          className="lg: input input-bordered ml-6 bg-transparent"
        ></input>
      </div>
      {datosFiltrados !== 0 && (
        <div className="bg-white w-52 rounded text-black">
          {datosFiltrados.map((el, key) => {
            return (
              <a
                className="p-0.5 bg-white border-solid"
                key={key}
                href={`/productos/${el.id}`}
              >
                <p className="px-3">{el.modelo}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
