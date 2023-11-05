import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./templates/Navbar.jsx";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
function Payments(props) {
  const { product_id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/producto/${product_id}`)
      .then((data) => data.json())
      .then((json) => {
        setProducto(json);
      });
  }, [product_id]);

  function pagar() {
    let user_id = localStorage.getItem("user_id");
    let precio = producto[0].precio;
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/pagos`, { product_id, user_id, precio })
      .then((res) => {
        if (res.data === 1) {
          swal({
            title: "Felicitaciones",
            text: "Compra realizada exitosamente",
            icon: "success",
          });
        } else if (res.data === 0) {
          swal({
            title: "Pago rechazado",
            text: "Ocurrio un error en la transacción",
            icon: "error",
          });
        }
      });
    }

  return (
    <div>
      <Navbar />
      <div className="w-full h-24 hidden lg:flex"> </div>
        {producto.map((item, inx) => {
          return (
            <div key={inx} 
            className="flex justify-center bg-base-100 p-6">
              {/* Imagen del Producto*/}
              <div className="hero-content flex-col lg:flex-row w-auto bg-white rounded-xl">
                <figure className="bg-white rounded-xl px-2">
                    <img
                      src={require(`../imagenes/${item.imagen}`)}
                      alt="logo"
                      className="rounded-xl w-96 h-auto"
                    />
           
                    <div className="flex justify-center bg-white">
                      <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300"/>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                      </div>
                    </div>

                  <div className="flex justify-start bg-white">
                    <h2 className="card-title text-4xl text-neutral">
                        {item.modelo}</h2>
                  </div>

                  <div className="flex justify-start bg-white">
                    <h2 className="text-lg text-black">Antes:</h2>
                    <h2 className="text-lg line-through ml-48 text-black">S/{item.descuento}</h2>
                  </div>
                  <div className="flex justify-start bg-white rounded-xl">
                    <h2 className="card-title text-lime-500">Total: </h2>
                    <h2 className="card-title text-2xl text-lime-500 ml-48">S/{item.precio}</h2>
                  </div>
                </figure>
                    
      {/* detalles del producto*/}
      <div className="w-80   bg-white rounded-2xl">
        <div className="flex justify-center">
          <h2 className="card-title text-black">
            Seleccione su Metodo de Pago
          </h2>
          </div>
    {/* Carrusel de metodos de pagos*/}
      <div className="flex justify-center">
        <div className="carousel rounded-box w-64 h-96">
          <div id="item1" className="carousel-item">
          <figure className="w-64">
            <img src={require("../imagenes/yapee.png")} alt="Yape" className="rounded-xl" />
          </figure>
          </div>
          <div id="item2" className="carousel-item">
          <figure className="w-64">
            <img src={require("../imagenes/plin.png")} alt="Plin" className="rounded-xl"/>
            </figure>
          </div>
          <div id="item3" className="carousel-item">
          <figure className="w-64">
            <img src={require("../imagenes/agora.png")} alt="agora" className="rounded-xl"
            />
            </figure>
          </div>
        </div>
      </div>

    <div className="flex justify-center w-full py-1 gap-2 hidden lg:flex">
      <a href="#item1" className="btn btn-xs">1
        </a>
      <a href="#item2" className="btn btn-xs">2
        </a>
      <a href="#item3" className="btn btn-xs">3
        </a>    
    </div>
 
    <div className="flex justify-center py-1">
      <button onClick={pagar} className="btn btn-primary w-64">
         Confirmar Pago
      </button>
    </div>
    </div>
    </div>
    </div>
      );
    })}
  </div>
  );
}
export default Payments;
