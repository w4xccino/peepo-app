import React, { useEffect, useState } from "react";
import Footer from "./templates/footer";
import { useParams } from "react-router-dom";
import Navbar from "./templates/Navbar.jsx";
import { Link } from "react-router-dom";

function Producto(props) {
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
      <div className="w-full h-40 hidden lg:flex"> </div>
      {producto.map((item, inx) => {
        return (
          <div
            key={inx}
            className="flex justify-center bg-base-100 p-6"
          >
            <div className="hero-content flex-col lg:flex-row w-full bg-white rounded-xl shadow-xl py-12">
              <figure className="px-3 pt-3">
                <img
                  src={require(`../imagenes/${item.imagen}`)}
                  alt="Shoes"
                  className="rounded-xl w-96 h-auto"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-4xl text-neutral">
                  {item.modelo}
                </h2>
                <p className="text-lg line-through">S/ 500.00</p>
                 <p className="text-2xl text-lime-500">S/ {item.precio}(Oferta)</p>
                <p className="text-xl font-bold text-black">Descripcion</p>
                <p className="text-neutral">{item.descripcion}</p>
                <br />
                <div className="card-actions justify-center">
                  <a href={item.modeloRA}>
                    <input
                      className="btn btn-active"
                      type="button"
                      value="Visualizar en Realidad Aumentada"
                    />
                  </a>
                  <Link
                    to={`/payments/${product_id}`}
                    className="btn btn-primary"
                  >
                    Comprar
                  </Link>
                  <p className="text-black">14+ unidades disponibles</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full h-52 hidden lg:flex"> </div>
      <Footer />
    </div>
  );
}

export default Producto;
