import React from "react";
import Footer from "./templates/footer";
import Navbar from "./templates/Navbar.jsx";

function Payments(){
    return (
<div>
    <Navbar />
<div className="w-full min-h-screen bg-base-100 p-6 ">
    <div className="flex justify-center">
        <h2 className="card-title text-white">Pagina de Pagos</h2>
    </div>
        <br></br>

    <div className="flex justify-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={require("../imagenes/logo.png")} alt="logo" />
          </div>
        </div>
    </div>
        <br></br>
    <div className="flex justify-center">
        <h2 className="card-title text-white">Huawei p30 lite 4/128Gb</h2>
    </div>
    <div className="flex justify-center">
        <h2 className="card-title text-white">Nvidia RTX 3090 32Gb</h2>
    </div>
    <div className="flex justify-center">
        <h2 className="card-title text-blue-500">Ver mas...</h2>
    </div>

    <br></br>
    <div className="flex justify-center">
        <h2 className="card-title text-white">Selecciones su Metodo de Pago</h2>
    </div>
    <br></br>

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

    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#item1" className="btn btn-xs">1</a>
      <a href="#item2" className="btn btn-xs">2</a>
      <a href="#item3" className="btn btn-xs">3</a>
      <a href="#item4" className="btn btn-xs">4</a>
    </div>

    <br></br>

    <div className="flex justify-center">
        <button class="btn btn-primary">Confirmar Pago</button>
    </div><br></br>

    <div className="flex justify-center">
        <input type="email"class="w-64 h-8 px-3 py-1.5 text-gray-700 bg-white border border-solid rounded" id="email" placeholder="Ingrese su correo electronico"/>
    </div><br></br>

    <div className="flex justify-center">
        <button class="btn btn-secondary">Enviar Factura</button>
    </div>

</div>
</div>
    );
}
export default Payments;