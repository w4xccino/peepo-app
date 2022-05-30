import React, { useEffect, useState } from "react";
import Navbar from "./templates/Navbar.jsx";
import { useParams } from "react-router-dom";
function Payments(props){

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
<div><Navbar/>
<div className="w-full min-h-screen bg-base-100 p-6 ">

<div>
{producto.map((item, inx) => {
  return (
    <div key={inx}>
      <div className="flex justify-center">
          <h1 className="card-title text-4xl text-white">Pagina de Pagos</h1>
      </div>
          <br></br>
      {/* Imagen del Producto*/ }
      <div className="flex justify-center">
        <div className="avatar">   
          <div className="w-64 rounded-box">
            <img src={require(`../imagenes/${item.imagen}`)} alt="logo" />
          </div>
        </div>
      </div>
          <br></br>
      {/* Nombre del producto*/ }
      <div className="flex justify-center">
        <h2 className="card-title text-white">{item.descripcion}</h2>
      </div>
      {/* Precio del producto*/ }
      <div className="flex justify-center">
        <h2 className="card-title text-yellow-500">S/ {item.precio}</h2>
      </div>

      
      <div className="flex justify-center">
        <h2 className="card-title text-white">Seleccione su Metodo de Pago</h2>
      </div>

      <div className="flex justify-center">
        <div className="carousel rounded-box w-64 h-64">
          <div id="item1" className="carousel-item">
              <img src={require("../imagenes/yape.png")} alt="Burger"/>
          </div>
          <div id="item2" className="carousel-item">
              <img src={require("../imagenes/plin.png")} alt="Burger"/>
          </div>
          <div id="item3" className="carousel-item">
              <img src={require("../imagenes/paypal.png")} alt="Burger"/>
          </div>
          <div id="item4" className="carousel-item">
              <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger"/>
          </div>
        </div>
      </div>
         {/* Carrusel de metodos de pagos*/ }
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>

        <br></br>
        {/* Funcionalidad de agregar al historial de pedidos*/ }
        <div className="flex justify-center">
            <button className="btn btn-primary">Confirmar Pago</button>
        </div><br></br>
        <div className="flex justify-center">
            <input type="email"className="w-64 h-8 px-3 py-1.5 text-gray-700 bg-white border border-solid rounded" id="email" placeholder="Ingrese su correo electronico"/>
        </div><br></br>
        {/*Enviar la factura por correo*/ }
        <div className="flex justify-center">
            <button className="btn btn-secondary">Enviar Factura</button>
        </div>

 {/*Cierre del Contenedor del Mapeo*/ }
        </div>
        );
      })}
    </div>

  </div>    
</div>
    );
}
export default Payments;