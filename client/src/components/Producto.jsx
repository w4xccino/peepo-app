import React, { useEffect, useState } from "react";
import Footer from "./templates/footer";
import { useParams } from "react-router-dom";
import Navbar from "./templates/Navbar.jsx";

function Producto() {
  const { product_id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/producto/${product_id}`)
      .then((data) => data.json())
      .then((json) => {
        setProducto(json);
      });
  }, [product_id]);
  return (
    <div>
      {/* Barra de Navegacion dentro del body */}
      <Navbar />
      {producto.map((item, inx) => {
        return (
          <div
            key={inx}
            className=" w-full min-h-screen flex flex-wrap justify-center p-6 bg-base-100"
          >
            <div className="card w-96 h-full bg-white shadow-xl py-12">
              <figure className="px-3 pt-3">
                <img
                  src={require(`../imagenes/${item.imagen}`)}
                  alt="Shoes"
                  className="h-64 w-auto rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-neutral">
                  {item.descripcion}
                </h2>
                <p className="text-3xl text-purple-600">S/ {item.precio}0</p>
                <h2 className="card-title text-neutral">Descripcion</h2>
                <p className="text-neutral">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque condimentum semper ornare. Quisque imperdiet
                  tellus nibh. Nam tincidunt, elit ut tristique pretium, lacus
                  felis sagittis nisl, vitae consequat dolor nunc vel massa.
                </p>
                <br />
                <br />
                <div className="card-actions justify-center">
                  <button className="btn btn-secondary">
                    Visualizar en AR
                  </button>
                  <button className="btn btn-primary">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Producto;
