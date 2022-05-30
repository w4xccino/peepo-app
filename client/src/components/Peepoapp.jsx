import React, { useEffect, useState } from "react";
import CardProduct from "./templates/card-product";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import Filtros from "./templates/filtros.jsx";

function Peepoapp() {
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/productos")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  //Consumiendo la api de categoria
  const [categoriaa, setCategoria] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/categorias")
      .then((response) => response.json())
      .then((json) => setCategoria(json));
  }, []);
  let list = [];
  categoriaa.map((item, idx) => {
    return list.push(item.nombre_categoria);
  });

  return (
    <div>
      {/* Barra de Navegacion dentro del body */}
      <Navbar />
      {/* Contenedor principal de la pagina */}
      <div className="w-full min-h-screen p-6">
        <div className="flex flex-wrap justify-center ">
          {/* Color del contenedor responsive */}
          {/* Integracion de los cards productos con sus props */}
          {producto.map((item, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  precio={item.precio}
                  producto={item.modelo}
                  imagen={item.imagen}
                  link={`/productos/${item.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Area del componente footer*/}
      <Footer />
    </div>
  );
}
export default Peepoapp;
