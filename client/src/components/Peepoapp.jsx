import React, { useEffect, useState } from "react";
import CardProduct from "./templates/card-product";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";

function Peepoapp() {
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/productos`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  //Consumiendo la api de categoria
  const [categoriaa, setCategoria] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/categorias`)
      .then((response) => response.json())
      .then((json) => setCategoria(json));
  }, []);
  let list = [];
  categoriaa.map((item, idx) => {
    return list.push(item.nombre_categoria);
  });

  return (
    <div>
      <Navbar />
      {/* Contenedor principal de la pagina */}
      <div className="w-full min-h-screen">
        <div className="flex flex-wrap justify-center ">
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
      <Footer />
    </div>
  );
}
export default Peepoapp;
