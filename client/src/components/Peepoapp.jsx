import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProduct from "./templates/card-product";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";
import Filtros from "./templates/filtros.jsx"

function Peepoapp() {
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/productos")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div>
      {/* Barra de Navegacion dentro del body */}
      <Navbar />
      {/* Contenedor principal de la pagina */}
      <div className="w-full min-h-screen p-6">
        <div className="flex justify-center">
        {/*Retornamos los select de categorias, Estado y precio pi*/}
        <Filtros list={["Categorias", "Ropa", "Electronica", "Telefonos", "Muebles", "Informatica", "Herramientas"]} />
        <Filtros list={["Estado", "Nuevo", "Usado", "Reparado"]} />
        <Filtros list={["Precio", "Menor", "descuentos", "Mayor"]} />
        </div>

        <div className="flex flex-wrap justify-center ">
          {" "}
          {/* Color del contenedor responsive */}
          {/* Integracion de los cards productos con sus props */}
          {producto.map((item, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  precio={item.precio}
                  producto={item.descripcion}
                  /* imagen="polo.jpg" */
                  imagen={item.imagen}
                  link={`/productos/${item.id}`}
                />
              </div>
            );
          })}
          {/* <CardProduct precio="900" producto="RTX 3090" imagen="rtx" /> */}
          {/* <CardProduct precio="23440" producto="Huawei P30" imagen="p30" /> */}
          {/* <CardProduct precio="680" producto="wofer" imagen="wofer" /> */}
          {/* <CardProduct precio="200" producto="Zapatillas" imagen="jordan" /> */}
          {/* <CardProduct precio="40" producto="DVD" imagen="dvd" /> */}
          {/* <CardProduct precio="60000" producto="NFT Romario" imagen="avatar" /> */}
          {/* <CardProduct precio="120" producto="Huawei p40" imagen="p302" /> */}
          {/* <CardProduct precio="8000" producto="Github" imagen="Git" /> */}
        </div>
      </div>

      {/* Area del componente footer*/}
      <Footer />
    </div>
  );
}
export default Peepoapp;
