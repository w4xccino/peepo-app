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
      {producto.map((item, inx) => {
        return (
          <div
            key={inx}
            className=" w-full min-h-screen flex flex-wrap justify-center p-6 bg-base-100"
          >
            {console.log(item.modeloRA)}
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
                  {item.modelo}
                </h2>
                <p className="text-3xl text-purple-600">S/ {item.precio}0</p>
                <h2 className="card-title text-neutral">Descripcion</h2>
                <p className="text-neutral">
                  Smartphone Huawei P30 pro de segundo uso. El equipo esta en
                  perfecto estado 8/10, no tiene reparaciones. Me puede pagar
                  por yape o tunki, solo interesados no sapos.
                </p>
                <br />
                <br />
                <div className="card-actions justify-center">
                <a href={item.modeloRA}>
                  <input className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button" value="Visualizar en AR"/>
                </a>
                    <Link to={`/payments/${product_id}`} className="btn btn-primary">
                      Comprar
                    </Link>
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
