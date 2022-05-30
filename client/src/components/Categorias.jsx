import React, { useEffect, useState } from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import Filtros from "./templates/filtros.jsx";

function Categorias() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/categorias")
      .then((response) => response.json())
      .then((json) => setCategoria(json));
  }, []);

  let list = [];
  categoria.map((item, idx) => {
    return list.push(item.nombre_categoria);
  });
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen p-6">
        <div className="flex flex-wrap justify-center">
          <Filtros list={list} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Categorias;
